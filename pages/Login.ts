import { expect, Locator, Page } from "@playwright/test";

export class Login{
    readonly email_address:Locator
    readonly password:Locator
    readonly remember_me:Locator
    readonly forgot_password:Locator
    readonly sign_in:Locator
    readonly fill_the_form_for_me:Locator
    readonly register_your_clinic:Locator
    readonly browser_the_catalogue_as_a_guest:Locator
    readonly account_email:Locator
    readonly send_reset_link:Locator
    readonly cancel:Locator
    readonly error_message_login:Locator

    constructor(private page:Page){
        this.page=page
        this.email_address = page.getByPlaceholder("you@clinic.com")
        this.password = page.getByPlaceholder("Enter your password")
        this.remember_me = page.getByRole("checkbox",{name:'Remember me',exact:true})
        this.forgot_password = page.getByRole("button",{name:'Forgot password?',exact:true})
        this.sign_in = page.getByRole("button",{name:'Sign in',exact:true})
        this.fill_the_form_for_me = page.getByRole("button",{name:'Fill the form for me',exact:true})
        this.register_your_clinic = page.getByRole("link",{name:'Register your clinic',exact:true})
        this.browser_the_catalogue_as_a_guest = page.getByRole("link",{name:'Browse the catalogue as a guest',exact:true})
        this.account_email = page.getByRole("textbox",{name:'Account email',exact:true})
        this.send_reset_link = page.getByRole("button",{name:'Send reset link',exact:true})
        this.cancel = page.getByRole("button",{name:'Cancel',exact:true})
        this.error_message_login = page.getByTestId("login_alert")
    }
    async assert_error_message_after_login(message:string){
        await expect(this.error_message_login).toHaveText(message)
    }
    async perform_fill_the_form(){
        await this.fill_the_form_for_me.click()
        await this.remember_me.check()
        await this.sign_in.click()
    }
    async perform_reset_password(email:string){
        await this.forgot_password.click()
        await this.account_email.fill(email)
        await this.send_reset_link.click()
    }
    async perform_register_your_clinic(){
        await this.register_your_clinic.click()
    }
    async perform_browse_the_catalogue_as_a_guest(){
        await this.browser_the_catalogue_as_a_guest.click()
    }
    async perform_login(email:string,passcode:string){
        await this.email_address.first().fill(email)
        await this.password.fill(passcode)
        await this.remember_me.check()
        await this.sign_in.click()
    }
    
}