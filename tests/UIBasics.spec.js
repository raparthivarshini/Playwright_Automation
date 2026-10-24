const {test, expect} = require('@playwright/test');

test('First playwright test', async ({page})=>
{
 await page.goto('https://rahulshettyacademy.com/practice');
});


test('loginPage', async ({page})=>
{
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 const username = page.locator('#username')
 const password = page.locator("[id='password']")
 const signin = page.locator('#signInBtn')
 await username.fill('rahulshettyacademy');
 await password.fill('Learning@830$3mK');
 await signin.click();
 await password.fill("")
 await password.fill("Learning@830$3mK2");
 await signin.click();

});

test.only('practicelogin', async ({page})=>
{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator('[id="userEmail"]').fill('raparthivarshini64@gmail.com');
  await page.locator('[type="password"]').fill('Varshini@20');
  await page.locator('[id="login"]').click();
  console.log(await page.title());
  expect(page).toHaveTitle("Let's Shop");
//   await page.waitForLoadState('networkidle');
  await page.locator('[class="card-body"] b').last().waitFor();
  const items = await page.locator('[class="card-body"] b').allTextContents();
  console.log(items)
}
);