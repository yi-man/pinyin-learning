import { test, expect } from '@playwright/test';

test('首页正常加载', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Create Next App/);
});