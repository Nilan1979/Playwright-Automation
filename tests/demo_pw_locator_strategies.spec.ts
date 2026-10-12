import {test,expect} from '@playwright/test'

test("Playwright locators", async ({page})=>{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")


    const projectsLink=page.getByRole('link',{name:'Projects'})
    await expect(projectsLink).toBeVisible()

    const signInButton = page.getByRole('button',{name:'Sign In'})
    await expect(signInButton).toBeVisible()
    await signInButton.click()

    const createAccountButton = page.getByRole('button',{name:'Create Account'})
    await expect(createAccountButton).toBeVisible()
    await createAccountButton.click()


    const welcomeText = page.getByText('Welcome, John! 👋')
    await expect(welcomeText).toBeVisible()


    const firstName=page.getByLabel('First Name')
    await expect(firstName).toBeVisible({ timeout: 10000 })
    await firstName.fill("Nilan")


    const searchInput=page.getByPlaceholder('Search tests...')
    await expect(searchInput).toBeVisible()

    await searchInput.fill("Locators practice")

    const altText=page.getByAltText('Playwright logo')
    await expect(altText).toBeVisible()


    const totalRunsBox=page.getByTitle('Total test runs')
    await expect(totalRunsBox).toBeVisible()
    await expect(totalRunsBox).toHaveText('4,821Total Runs')
    await expect(totalRunsBox).toContainText('4,821')

    







    
})