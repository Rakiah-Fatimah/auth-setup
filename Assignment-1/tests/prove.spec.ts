import { test, expect } from '@playwright/test';

test('Verify saved authentication', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/');

    await expect(page.locator('li:has-text("Logged in as") b')).toHaveText('Samii');

});