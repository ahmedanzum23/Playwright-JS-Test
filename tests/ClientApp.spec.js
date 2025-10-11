// tests/UIBasictest.spec.js

const { test, expect } = require('@playwright/test'); // Require test and expect


test.only('Browser Context Playwright test', async ({ page }) => {
   

    
    
    // Test action
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("minemor608@lorkex.com");
    await page.locator("#userPassword").fill("Letmein123!");
    await page.locator("[value='Login']").click();
    //await page. waitForLoadState('networkidle');
      await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator (".card-body b").allTextContents();
    console.log(titles)
   


});