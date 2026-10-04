import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';

test('User Registration', async ({ page }) => {

    // Create Page Object
    const signupPage = new SignupPage(page);

    // Navigate
    await page.goto('https://www.automationexercise.com/');

    // await page.waitForTimeout(3000);
    // Navigate to Signup / Login
    await signupPage.signupLink.click();

    // Initial Signup
    await signupPage.signupName.fill('samii');
    await signupPage.signupEmail.fill('samii@gmail.com');
    await signupPage.signupButton.click()
    // await page.waitForTimeout(3000);
    // Verify Account Information page
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    // Account Information
    await signupPage.genderRadio.click();

    // await signupPage.accountName.fill('Rakiah Fatimah');
    // await signupPage.accountEmail.fill('rakiah@gmail.com');
    await signupPage.password.fill('Rakiah@123');

    // Date of Birth
    await signupPage.days.selectOption('12');
    await signupPage.months.selectOption('3');
    await signupPage.years.selectOption('2009');

    // Newsletter
    await signupPage.newsletter.check();

    // Address Information
    await signupPage.firstName.fill('Rakiah');
    await signupPage.lastName.fill('Fatimah');
    await signupPage.company.fill('jqhwja');
    await signupPage.address.fill('jedjwqa');
    await signupPage.address2.fill('aqhn');

    // Address Details
    await signupPage.country.selectOption({ label: 'India' });
    await signupPage.state.fill('Denbighshire');
    await signupPage.city.fill('djw');
    await signupPage.zipcode.fill('QJDJA');
    await signupPage.mobileNumber.fill('03034264749');

    // Create Account
    await signupPage.createAccount.click();
    // await page.waitForTimeout(3000);
    // Verify Account Creation
    await expect(page.getByText('Account Created!')).toBeVisible();

    // Continue
    await signupPage.continueButton.click();

    // Logout
    await signupPage.logoutLink.click();
});