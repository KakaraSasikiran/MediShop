import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Orders } from "./Orders";
import { Home } from "./home";

export class Central{

    constructor(private page:Page){
        this.page = page
    }
    getLogin(){
        return new Login(this.page)
    }
    getOrders(){
        return new Orders(this.page)
    }
    getHome(){
        return new Home(this.page)
    }

}