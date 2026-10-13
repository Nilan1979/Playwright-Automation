import {test, expect} from "@playwright/test";

test('CSS locators',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    //tag  with id   or id
    const searchbox_with_id = await page.locator("input#small-searchterms")
    searchbox_with_id.fill("14.1-inch Laptop")

    await page.locator('[value="Search"]').click() 
})