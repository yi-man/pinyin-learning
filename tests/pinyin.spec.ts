import { test, expect } from '@playwright/test';

test.describe('拼音学习MVP', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('页面加载成功', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('拼音学习');
  });

  test('页面包含h1标题', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible({ timeout: 10000 });
    await expect(h1).toContainText('拼音学习');
  });

  test('页面包含声母区块', async ({ page }) => {
    await expect(page.locator('text=声母').first()).toBeVisible({ timeout: 10000 });
  });

  test('页面包含韵母区块', async ({ page }) => {
    await expect(page.locator('text=单韵母').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=复韵母').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=鼻韵母').first()).toBeVisible({ timeout: 10000 });
  });

  test('声母数量正确', async ({ page }) => {
    const section = page.locator('section').filter({ hasText: '声母' });
    await expect(section).toBeVisible({ timeout: 10000 });
    const buttons = section.locator('button');
    await expect(buttons).toHaveCount(23, { timeout: 10000 });
  });

  test('韵母数量正确', async ({ page }) => {
    await expect(page.locator('text=单韵母')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('section').filter({ hasText: '单韵母' }).locator('button')).toHaveCount(7, { timeout: 10000 });

    await expect(page.locator('text=复韵母')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('section').filter({ hasText: '复韵母' }).locator('button')).toHaveCount(9, { timeout: 10000 });

    await expect(page.locator('text=鼻韵母')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('section').filter({ hasText: '鼻韵母' }).locator('button')).toHaveCount(9, { timeout: 10000 });
  });

  test('页面包含footer', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('footer')).toContainText('拼音学习工具');
  });

  test('拼音卡片可点击', async ({ page }) => {
    const section = page.locator('section').filter({ hasText: '单韵母' });
    await expect(section).toBeVisible({ timeout: 10000 });
    const button = section.locator('button').first();
    await expect(button).toBeVisible({ timeout: 10000 });
    await button.click();
  });
});
