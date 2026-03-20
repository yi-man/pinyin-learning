import { test, expect } from '@playwright/test';
import { PINYIN_DATA } from '@/data/pinyin';

test.describe('拼音学习MVP', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面加载成功并显示正确标题', async ({ page }) => {
    await expect(page).toHaveTitle(/拼音学习/);
    await expect(page.locator('h1')).toContainText('拼音学习');
  });

  test('显示页面引导文字', async ({ page }) => {
    await expect(page.getByText('点击拼音卡片，听标准发音')).toBeVisible();
  });

  test('声母区块显示完整', async ({ page }) => {
    const initialsSection = page.locator('section').filter({ hasText: '声母' });
    await expect(initialsSection).toBeVisible();

    for (const pinyin of PINYIN_DATA.initials.pinyins) {
      await expect(initialsSection.getByRole('button', { name: pinyin, exact: true })).toBeVisible();
    }
  });

  test('单韵母区块显示完整', async ({ page }) => {
    const singleSection = page.locator('section').filter({ hasText: '单韵母' });
    await expect(singleSection).toBeVisible();

    for (const pinyin of PINYIN_DATA.finals.single.pinyins) {
      await expect(singleSection.getByRole('button', { name: pinyin, exact: true })).toBeVisible();
    }
  });

  test('复韵母区块显示完整', async ({ page }) => {
    const compoundSection = page.locator('section').filter({ hasText: '复韵母' });
    await expect(compoundSection).toBeVisible();

    for (const pinyin of PINYIN_DATA.finals.compound.pinyins) {
      await expect(compoundSection.getByRole('button', { name: pinyin, exact: true })).toBeVisible();
    }
  });

  test('鼻韵母区块显示完整', async ({ page }) => {
    const nasalSection = page.locator('section').filter({ hasText: '鼻韵母' });
    await expect(nasalSection).toBeVisible();

    for (const pinyin of PINYIN_DATA.finals.nasal.pinyins) {
      await expect(nasalSection.getByRole('button', { name: pinyin, exact: true })).toBeVisible();
    }
  });

  test('点击拼音卡片触发交互', async ({ page }) => {
    const singleSection = page.locator('section').filter({ hasText: '单韵母' });
    const pinyinButton = singleSection.getByRole('button', { name: 'a', exact: true });
    await expect(pinyinButton).toBeVisible();
    await pinyinButton.click();
  });

  test('声母数量为23个', async ({ page }) => {
    const initialsSection = page.locator('section').filter({ hasText: '声母' });
    const buttons = initialsSection.getByRole('button');
    await expect(buttons).toHaveCount(23);
  });

  test('韵母总数正确', async ({ page }) => {
    const singleSection = page.locator('section').filter({ hasText: '单韵母' });
    const compoundSection = page.locator('section').filter({ hasText: '复韵母' });
    const nasalSection = page.locator('section').filter({ hasText: '鼻韵母' });

    await expect(singleSection.getByRole('button')).toHaveCount(7);
    await expect(compoundSection.getByRole('button')).toHaveCount(9);
    await expect(nasalSection.getByRole('button')).toHaveCount(9);
  });

  test('显示页脚信息', async ({ page }) => {
    await expect(page.locator('footer')).toContainText('拼音学习工具');
  });

  test('不同拼音卡片可独立点击', async ({ page }) => {
    const singleSection = page.locator('section').filter({ hasText: '单韵母' });
    const buttonA = singleSection.getByRole('button', { name: 'a', exact: true });
    const buttonO = singleSection.getByRole('button', { name: 'o', exact: true });

    await buttonA.click();
    await expect(buttonA).toBeVisible();

    await buttonO.click();
    await expect(buttonO).toBeVisible();
  });
});
