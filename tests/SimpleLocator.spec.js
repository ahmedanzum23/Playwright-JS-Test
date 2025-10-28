import { test , expect} from '@playwright/test' ;

test("Single element locating" , async ({page})  =>{



await page.goto("https://demo-opencart.com/index.php?route=account/register")



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

let firstNameTxt = page.getByRole () ;
let lasttNameTxt = page.getByRole () ;
let personal = page.getByText();
const emailTxt =  page.getByLabel();
const phoneNum =  page.getByPlaceholder();
const img1 = page.getByAltText();
const img2 = page.getByAltText();
const passTxtt = page.getByPlaceholder();




await firstNameTxt.fill();
await firstNameTxt.fill();
await expect(). toBeVisible();
await emailTxt.fill();
await phoneNum.fill("");
await expect (img1).toBeVisible();
await expect (img2).toBeVisible();
await page.locator ("").click();
await page.locator ("").click();







await page.pause();







 













}



)