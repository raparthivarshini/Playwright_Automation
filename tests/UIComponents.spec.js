const {test, expect} = require('@playwright/test');


test('loginPage', async ({page})=>
{
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 const userName = page.locator('#username')
 const password = page.locator("[id='password']")
 const signIn = page.locator('#signInBtn')
 await userName.fill('rahulshettyacademy');
 await password.fill('Learning@830$3mK2');
 const dropdown = page.locator('select.form-control');
 await dropdown.selectOption("consult")
//  await page.pause();
await page.locator(".radiotextsty").last().click();
await page.locator('#okayBtn').click(); 
// console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
expect(await page.locator('#terms').isChecked()).toBeFalsy();
await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText")
});


test.only('Child window', async ({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator('#username')
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all(
  [context.waitForEvent('page'),
  documentLink.click(),
  ])
  const text = await newPage.locator('.red').textContent();
//  console.log(text)
 const arrayText = text.split('@')
 const domain = arrayText[1].split(".")[0]
 console.log(domain)
 await page.locator('#username').fill(domain)
 await page.pause();

console.log(await userName.inputValue());
});


