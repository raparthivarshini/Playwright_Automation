const {test, expect} = require('@playwright/test');



test('special locators', async ({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").check();
 await page.getByLabel("Employed").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill('fyfug');
 await page.getByRole("button", {name: "Submit"}).click();
 await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10000});

 await page.getByRole("link", {name: "Shop"}).click();

 await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
});


test('test level timeout', async ({page})=>
{
 const slowExpect = expect.configure({timeout:10000});
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").check();
 await page.getByLabel("Employed").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill('fyfug');
 await page.getByRole("button", {name: "Submit"}).click();
 await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

 await page.getByRole("link", {name: "Shop"}).click();
 await page.getByText("Shop Name").waitFor();
 await slowExpect(page.getByText("Shop Name")).toBeVisible();

 await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
});