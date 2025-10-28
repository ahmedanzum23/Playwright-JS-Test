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



 const fromControl  = page.locator(".form-control");
 console.log(await fromControl.count());

 await fromControl.first().fill("Iphone");
 await fromControl.last().fill("1234");
 

await fromControl.nth(1).fill("Henry");
await fromControl.nth(2).fill("cavil");


await page.pause();







 













}



)