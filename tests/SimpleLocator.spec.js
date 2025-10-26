import { test , expect} from '@playwright/test' ;

test("Single element locating" , async ({page})  =>{



await page.goto("https://demo-opencart.com/index.php?route=account/register")


//general locator

const firstNameTxt  = page.locator("#input-firstname") ;
const lastNameTxt = page.locator("#input-lastname");
const emailTxt = page.locator("#input-email");

await firstNameTxt.fill("anzum");
await  lastNameTxt.fill("khan");
await emailTxt.fill("test@gail.com");



await page.pause();







 













}



)