import {test, expect} from "@playwright/test";



test("Verify Title",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page.getByRole("link", { name: "Demo Web Shop" })).toBeVisible();
    await expect(page.locator('body')).toContainText("Welcome to our store");
})
