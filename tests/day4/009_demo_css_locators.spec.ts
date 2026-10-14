import {test, expect} from "@playwright/test";

test('CSS locators',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator("input[name='q']")).toHaveText("14.1-inch Laptop")
      
})