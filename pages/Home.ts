import { Page } from "@playwright/test";

export class Home{
    constructor(private page:Page){
        this.page=page
    }
    async click_specific_tab_name_within_navbar(name:string){
        await this.page.getByRole("link",{name:name,exact:true}).click()
    }
}