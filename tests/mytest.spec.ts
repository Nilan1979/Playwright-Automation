import {test, expect} from "@playwright/test";



/*
test("Title",async({page})=>{

    //step 1
    //step 2
    //step 3
})

*/



test("Verify Title",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page.getByRole("heading", { name: "Demo Web Shop" })).toBeVisible()
})


