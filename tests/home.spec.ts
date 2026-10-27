import { test, expect } from '@playwright/test';

test('brand, contact, keyboard access and responsive layout', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/AquaTessera/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Vaša vizija.',
  );
  const logo = page.getByRole('img', { name: 'AquaTessera', exact: true });
  await expect(logo).toBeVisible();
  expect(
    await logo.evaluate(
      (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
    ),
  ).toBe(true);
  await expect(
    page.getByRole('link', { name: 'info@aquatessera.hr', exact: true }),
  ).toHaveAttribute('href', 'mailto:info@aquatessera.hr');
  await expect(
    page.getByRole('link', { name: '+385 97 622 2368', exact: true }),
  ).toHaveAttribute('href', 'tel:+385976222368');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Preskoči na sadržaj' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test('palette, system accordion and mobile navigation work', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Grafit', exact: true }).click();
  await expect(page.locator('#palette-name')).toHaveText('Grafit');
  await expect(
    page.getByRole('button', { name: 'Grafit', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.locator('summary').filter({ hasText: 'Hidroizolacija' }).click();
  await expect(
    page.getByRole('link', { name: /Primjer materijala: Mapelastic/ }),
  ).toBeVisible();
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: /Izbornik/ }).click();
    await expect(page.getByRole('navigation')).toBeVisible();
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Kontakt' })
      .click();
    await expect(
      page.getByRole('button', { name: /Izbornik/ }),
    ).toHaveAttribute('aria-expanded', 'false');
  }
  const broken = await page
    .locator('img')
    .evaluateAll((imgs: HTMLImageElement[]) =>
      imgs
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.src),
    );
  expect(broken).toEqual([]);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex, nofollow',
  );
});
