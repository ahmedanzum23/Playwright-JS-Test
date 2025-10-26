// tests/UIBasictest.spec.js

const { test, expect } = require('@playwright/test'); // Require test and expect

// First Test: Accessing the browser object to create a new context
// CORRECTED: .only is chained directly to test.
test('Browser Context Playwright test', async ({ browser }) => {
   

   //Try to make it
    const context = await browser.newContext();
    const page = await context.newPage();
    const unserName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a")
    
    
    // Test action
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    
    // css xpath 
    await unserName.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning"); 
    await signIn.click();
    
    // This line is now safe to execute after the expect() call validates the element is present and visible.
    console.log(await page.locator("[style*='block']").textContent());
    //verifying text
    await expect (page.locator("[style*='block']")).toContainText('Incorrect');


    //clean the text box and type new password 


    await unserName. fill ("") ;
    await unserName.fill("rahulshettyacademy");
    await signIn.click(); 

    //trying to getting first and second element from the list 
     //console.log (await cardTitles .first().textContent()); //first element
     //console.log (await cardTitles .nth(1).textContent()); //second element 
 const allTitles = await cardTitles.allTextContents();
 console.log(allTitles);


});





// Second Test: Using the standard 'page' fixture
test.only('UI controls', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    const unserName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    //select from the drop down
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    //select from multiple options admin or user
    await page.locator(".radiotextsty").last().click();
    //pop up (web-based)
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect (page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    //await page.pause();
   
});