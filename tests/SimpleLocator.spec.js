import { test , expect} from '@playwright/test' ;

test("Single element locating" , async ({page})  =>{



await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")



//general locator

/*
const firstNameTxt  = page.locator("#input-firstname") ;
const lastNameTxt = page.locator("#input-lastname");
const emailTxt = page.locator("#input-email");

await firstNameTxt.fill("anzum");
await  lastNameTxt.fill("khan");
await emailTxt.fill("test@gail.com");

*/


 //MULTIELEMENT 



 /*const fromControl  = page.locator(".form-control");
 console.log(await fromControl.count());

 await fromControl.first().fill("Iphone");
 await fromControl.last().fill("1234");
 

await fromControl.nth(1).fill("Henry");
await fromControl.nth(2).fill("cavil");
*/



//playwright locator

let firstNameTxt = page.getByRole ("textbox" , {"name": "* First Name"}) ;
let lasttNameTxt = page.getByRole ("textbox" , {"name": "* Last Name"}) ;
let personal = page.getByText("Register Account");
const emailTxt =  page.getByLabel("E-Mail");
const phoneNum=  page.getByPlaceholder("Telephone");
const img1 = page.getByAltText("naveenopencart");
const img2 = page.getByTitle("naveenopencart");
const passTxtt = page.getByPlaceholder("Password");




await firstNameTxt.fill("anz123");
await lasttNameTxt.fill("anzumn123");
await expect(personal). toBeVisible(); //assertion we write expect
await emailTxt.fill("ab@gmail.com");
await phoneNum.fill("01871234456");
await passTxtt.first().fill("1234");
await passTxtt.last().fill("1234");
await expect (img1).toBeVisible();
await expect (img2).toBeVisible();
await page.locator ("input[type='checkbox']").click();
await page.locator ("input[type='submit']").click();


// Approach 1: Using textContent()
let confirmMsg = await page.locator("h1").textContent();
expect(confirmMsg).toBe("Your Account Has Been Created!");
expect(confirmMsg).toContain("Created!");

// Approach 2: Using locator assertions
let confirmMsgLocator = await page.locator("h1");
await expect(confirmMsgLocator).toHaveText("Your Account Has Been Created!");
await expect(confirmMsgLocator).toContainText("Created!");


await page.pause();







 













}



)