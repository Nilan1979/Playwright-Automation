import {test,expect}  from '@playwright/test'

/*
=====================================
Playwright Locator Filters

1.Verify "add  to cart" for  the product 2
2.count items not  having "out of stock"
3.Find items with "In stock"
4.verify elements using data-testid
5.count all elements with test ids
6.find  "Say goodbye" button  for  john
7.find "say hello" button for mary
8.Find "Subscribe" buttons using multiple conditionds
9.find "deatails" buttons  for done tasks
10.verify  stock status counts

================================================

*/ 

// Hooks - Runs before each test
//open the practise  page  before  every test

test.beforeEach(async({page})=>{
    await page.goto('https://sdetqa.vercel.app/filters_practice.html')
})

//Runs after all the tests completed
test.afterAll(async({page})=>{
    await page.close()
})



//Filter using  hasText - filter by using text

test('2.count items not  having "out of stock"',async({page})=>{


    const productButton2 = page
        .getByRole('listitem')
        .filter({hasText:'Product 2'})
        .getByRole('button',{name:'Add to cart'});

    //Verify button is  visible
    await expect(productButton2).toBeVisible();


        //click
    //await productButton2.click()
    await page.close()

    
})




//Filter using  hasText - filter by using text

test('1.Verify "add  to cart" for  the product 2',async({page})=>{
    
const productButton2 = page
        .getByRole('listitem')
        .filter({hasText:'Product 2'})
        .getByRole('button',{name:'Add to cart'});

    //Verify button is  visible
    await expect(productButton2).toBeVisible();


        //click
    //await productButton2.click()
    await page.close()

    
})