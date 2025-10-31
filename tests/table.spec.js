import { test , expect} from '@playwright/test' ;

test("Table, alert" , async ({page})  =>{



await page.goto("https://testautomationpractice.blogspot.com/")

    await page.evaluate(() => {
        window.scrollBy(0, 700);
    });

    //explicit wait
    await page.locator("tbody tr").first().waitFor({ timeout: 50000 }); 
    const firstRow = await page.locator("tbody tr").first(); 
    const cells = await firstRow.locator("th").allTextContents(); 
    console.log(cells);

    const secondRow = await page.locator("tbody tr").nth(1); 
    const data = await secondRow.locator("td").nth(0).textContent(); 
    console.log(data);
    await page.pause();



  /////////////Handaling alert /////////////////


  //simple alert 

   // Listen for alert dialog and handle it
/*page.on('dialog', async (dialog) => {
  expect(dialog.type()).toContain('alert');
  expect(dialog.message()).toContain('I am an alert box!');
  await dialog.accept();
});

// Trigger the alert
await page.locator('#alertBtn').click();

*/

// Pause for debugging (optional)



// Handle prompt dialog
 await page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('Please enter your name:');
  await dialog.accept('Shah Rukh Khan');
});

await page.locator('#promptBtn').click();
await expect(page.locator('#demo')).toContainText('Shah Rukh Khan');


// Trigger the prompt
await page.locator('#promptBtn').click();

// Verify the result on the page
await expect(page.locator('#demo')).toContainText('Shah Rukh Khan');



await page.pause();

  

});



 












