import { test, expect } from '@playwright/test';

test('brand, contact, keyboard access and responsive layout', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/AquaTessera/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Surfaces shaped',
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
