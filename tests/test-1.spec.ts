import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.laptopcare.lk/');
  await expect(page.getByRole('textbox', { name: 'Search products...' })).toBeEmpty();
  await expect(page.getByRole('link', { name: 'LAPTOPS', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Profile' }).click();
  await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await expect(page.getByRole('button', { name: 'Sign In with Email' })).toBeVisible();
});