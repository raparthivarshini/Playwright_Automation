const {test, expect} = require('@playwright/test');



test('loginPageAutomation', async ({page})=>
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
await signIn.click();
await expect(page).toHaveTitle('ProtoCommerce');
const products = page.locator('div.card.h-100');
const productName = "Samsung Note 8"
await products.last().waitFor();
const count = await products.count();
for(let i = 0; i < count; ++i)
{
 if(await products.nth(i).locator('div.card-body a').textContent() === productName)
 {
   await products.nth(i).locator('button').click()
   break;
 }
}
await page.locator('[class="nav-link btn btn-primary"]').click();
expect(page.locator('.media')).toBeVisible();
await page.pause();
});



test.only('E2EAutomation', async ({page})=>
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const emailSelector = page.locator('[id="userEmail"]')
  const password = page.locator('[type="password"]')
  const login = page.locator('[id="login"]')
  const productName = "ADIDAS ORIGINAL"
  const email = "raparthivarshini64@gmail.com"
  await emailSelector.fill(email);
  await password.fill('Varshini@20');
  await login.click();
  expect(page).toHaveTitle("Let's Shop");

const products = page.locator('.card-body') 
await products.last().waitFor();
const count = await products.count();
for(let i = 0; i < count; ++i)
{
  const item = await products.nth(i).locator('b').textContent()
  if(item === productName)
  {
    await products.nth(i).locator("text= Add To Cart").click();
    break;
  }
}

await page.locator("[routerlink*='cart']").click();
await page.locator(".infoWrap").last().waitFor();
expect(page.locator(`h3:has-text("${productName}")`)).toBeVisible();
await page.locator("text=Checkout").click();
await page.locator("[placeholder='Select Country']").pressSequentially("ind", {delay:150});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const options = dropdown.locator('button')
const optioncount = await options.count();

for(let i = 0; i < optioncount; ++i)
{
  const country = await options.nth(i).textContent();
  if(country === " India")
  {
    await options.nth(i).click();
    break;
  }
}
const expiry = page.locator(".input.ddl")
await expiry.first().selectOption("04");
await expiry.last().selectOption("29");
const cvv = page.locator("[class='input txt']").first();
const name = page.locator("[class='input txt']").last();
const coupon = page.locator("[name='coupon']");
const button = page.locator("button:has-text('Apply Coupon')");
const couponMessage = page.locator(".mt-1.ng-star-inserted");
const emailValidator = page.locator(".user__name [type='text']").first();
await cvv.fill("456");
await name.fill("Varshini");
await coupon.fill("rahulshettyacademy");
await button.click();
await couponMessage.waitFor();
await expect(couponMessage).toHaveText("* Coupon Applied");
await expect(emailValidator).toHaveText(email);

await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

await page.locator("[routerlink*='myorders']").first().click();
const productDetails = page.locator("tbody tr")
const orderIds = productDetails.locator("[scope='row']")
const orderCount = await orderIds.count();
for(let i=0; i < orderCount; ++i)
{
  
  if(orderID.includes(await orderIds.nth(i).textContent()))
  {
   await productDetails.nth(i).locator("button:has-text('View')").click();
   break;
  }
}
expect(orderID.includes(await page.locator(".col-text").textContent()));
// await expect(page.locator(".title")).toHaveText(" ADIDAS ORIGINAL ");
});
