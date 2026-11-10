import {test} from '../fixtures/Fixtures'
import { Orders } from '../pages/Orders';

test.describe("Register Functionality",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(`${process.env.url!}/MediShopWebApp/login.html`)
    })

    test("Verify registration page controls",{tag:'@smoke'},async({page,central})=>{
        await central.getLogin().perform_fill_the_form()
        await central.getHome().click_specific_tab_name_within_navbar("Orders")
        // await central.getOrders().search_orders("Vitamin")
        await central.getEnterCapsuleName(new Orders(page),"D3")
        await central.getAction(new Orders(page),"Daily Multivitamin Supplement, Vitamin D3")
        // await central.getLogin().perform_reset_password("hello@gmail.com")
        // await central.getLogin().perform_register_your_clinic()
        // await central.getLogin().perform_browse_the_catalogue_as_a_guest()
        // await central.getLogin().perform_login("ell@gmail.com","12345")
        // await central.getLogin().assert_error_message_after_login("Invalid email or password. Please try again.")
        await page.pause()
    })
})