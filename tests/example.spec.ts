import { test, expect } from '@playwright/test';

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mymailhttps://automationexercise.com');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('ControlOrMeta+z');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mymail@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hello123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Your email or password is').click();
});
