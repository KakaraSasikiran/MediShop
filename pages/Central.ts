import { Page } from "@playwright/test";
import { Login } from "./Login";

export class Central{

    constructor(private page:Page){
        this.page = page
    }
    getLogin(){
        return new Login(this.page)
    }

}