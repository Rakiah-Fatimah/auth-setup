import { Page, Locator } from '@playwright/test';

export class SignupPage {
    // 1. Declare the page property
    private page: Page;

    // 2. Declare all locator properties
    signupLink: Locator;
    signupName: Locator;
    signupEmail: Locator;
    signupButton: Locator;
    loginEmail: Locator;
    loginPassword: Locator;
    loginButton: Locator;
    genderRadio: Locator;
    accountName: Locator;
    accountEmail: Locator;
    password: Locator;
    days: Locator;
    months: Locator;
    years: Locator;
    newsletter: Locator;
    firstName: Locator;
    lastName: Locator;
    company: Locator;
    address: Locator;
    address2: Locator;
    country: Locator;
    state: Locator;
    city: Locator;
    zipcode: Locator;
    mobileNumber: Locator;
    createAccount: Locator;
    accountCreated: Locator;
    continueButton: Locator;
    logoutLink: Locator;

    // 3. Initialize everything inside the constructor
    constructor(page: Page) {
        this.page = page;

        this.signupLink = this.page.getByRole('link', { name: 'Signup / Login' });
        this.signupName = this.page.locator('[data-qa="signup-name"]');
        this.signupEmail = this.page.locator('[data-qa="signup-email"]');
        this.signupButton= this.page.locator('[data-qa="signup-button"]')
        this.loginEmail = this.page.locator('[data-qa="login-email"]');
        this.loginPassword = this.page.locator('[data-qa="login-password"]');
        this.loginButton= this.page.locator('[data-qa="login-button"]')


        
        this.genderRadio = this.page.locator('#id_gender2');
        
        this.accountName = this.page.locator('[data-qa="signup-name"]');
        this.accountEmail = this.page.locator('[data-qa="signup-email"]');
        this.password = this.page.locator('[data-qa="password"]');
        this.days = this.page.locator('[data-qa="days"]');
        this.months = this.page.locator('[data-qa="months"]');
        this.years = this.page.locator('[data-qa="years"]');
        
        this.newsletter = this.page.locator('#newsletter');
        
        this.firstName = this.page.locator('[data-qa="first_name"]');
        this.lastName = this.page.locator('[data-qa="last_name"]');
        this.company = this.page.locator('[data-qa="company"]');
        this.address = this.page.locator('[data-qa="address"]');
        this.address2 = this.page.locator('[data-qa="address2"]');
        this.country = this.page.locator('[data-qa="country"]');
        this.state = this.page.locator('[data-qa="state"]');
        this.city = this.page.locator('[data-qa="city"]');
        this.zipcode = this.page.locator('[data-qa="zipcode"]');
        this.mobileNumber = this.page.locator('[data-qa="mobile_number"]');
        
        this.createAccount = this.page.locator('[data-qa="create-account"]');
        this.accountCreated = this.page.locator('[data-qa="account-created"]');
        this.continueButton = this.page.locator('[data-qa="continue-button"]');
        
        this.logoutLink = this.page.getByRole('link', { name: 'Logout' });
    }
}
