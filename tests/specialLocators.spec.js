const {test, expect} = require('@playwright/test');



test('special locators', async ({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").check();
 await page.getByLabel("Employed").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill('fyfug');
 await page.getByRole("button", {name: "Submit"}).click();
 await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

 await page.getByRole("link", {name: "Shop"}).click();

 await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
});


