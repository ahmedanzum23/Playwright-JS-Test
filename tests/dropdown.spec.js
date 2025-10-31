import { test , expect} from '@playwright/test' ;

test("dreopdown" , async ({page})  =>{



await page.goto("https://testautomationpractice.blogspot.com/")

    await page.evaluate(() => {
        window.scrollBy(0, 700);
    });

  

//single  dropdown

/*await page.locator("#country").selectOption({ label : "United Kingdom"});
await page.waitForTimeout(3000);
 
await page.locator("#country").selectOption({ value : "germany"});
await page.waitForTimeout(3000);

await page.locator("#country").selectOption({ index : 5});
await page.waitForTimeout(3000); */


//multiple dropdown




await page.selectOption('#colors' , ["Blue", "Red","yellow"]) ;


await page.pause();

  

});