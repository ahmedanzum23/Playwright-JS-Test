// tests/UIBasictest.spec.js

const { test, expect } = require('@playwright/test'); // Require test and expect

// First Test: Accessing the browser object to create a new context
// CORRECTED: .only is chained directly to test.
test.only('Browser Context Playwright test', async ({ browser }) => {
   

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
test('Page Playwright test', async ({ page }) => {
    // This test automatically gets a new page object
    await page.goto("https://google.com"); 
    
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});