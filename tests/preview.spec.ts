import { test, expect } from '@playwright/test';

test('Organic Mediterranean visual review: homepage and catalog', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('#kolekcije')).toBeVisible();
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true });
              img.addEventListener('error', () => resolve(), { once: true });
            }),
      ),
    );
  });
  await page.screenshot({
    path: testInfo.outputPath('organic-homepage.png'),
    fullPage: true,
    animations: 'disabled',
  });
  await page.locator('#kolekcije').screenshot({
    path: testInfo.outputPath('organic-catalog.png'),
    animations: 'disabled',
  });
});
