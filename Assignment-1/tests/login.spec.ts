import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';

test('User Registration', async ({ page }) => {

    // Create Page Object
    const signupPage = new SignupPage(page);

    // Navigate
    await page.goto('https://www.automationexercise.com/');

     await page.waitForTimeout(3000);
    // Navigate to Signup / Login
    await signupPage.signupLink.click();

    // login
     await page.waitForTimeout(3000);
    await signupPage.loginEmail.fill('samii@gmail.com');
    await signupPage.loginPassword.fill('Rakiah@123');
    await signupPage.loginButton.click()
     await page.waitForTimeout(3000);
    // Verify Account Login
    await expect(page.locator('li:has-text("Logged in as") b')).toHaveText('Samii');
     // Logout
    await signupPage.logoutLink.click();

    
});