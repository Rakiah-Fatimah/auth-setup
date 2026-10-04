import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';

test('Authenticate user', async ({ page }) => {

    const signupPage = new SignupPage(page);

    await page.goto('https://www.automationexercise.com/');

    await signupPage.signupLink.click();

    await signupPage.loginEmail.fill('samii@gmail.com');
    await signupPage.loginPassword.fill('Rakiah@123');
    await signupPage.loginButton.click();

    await expect(page.locator('li:has-text("Logged in as") b')).toHaveText('Samii');

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});