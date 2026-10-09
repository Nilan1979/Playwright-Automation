import {test,expect} from '@playwright/test'

test("Playwright locators", async ({page})=>{
    page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")
    
})