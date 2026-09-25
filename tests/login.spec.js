import {test, expect} from "@playwright/test"

//Log in test with valid email and password
test("Log in with valid email and password", async ({page}) => {
    await page.goto("https://www.automationexercise.com/")
    
    await page.getByRole("link", {name: " Signup / Login"}).click() //navigate to login
    await expect(page).toHaveURL(/login/) //to validate we are in the login/signup page

    //Log in validation with dummy password and email created for this test
    await page.locator('[data-qa="login-email"]').fill("dumdum@gmail.com")
    await page.locator('[data-qa="login-password"]').fill("dumdum")
    await page.getByRole("button", {name:"Login"}).click()
    await expect(page.getByText("Logged in as Shaan")).toBeVisible() //to validate login is success
})

