import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Orders } from "./Orders";
import { Home } from "./home";
import { Order } from '../interfaces/Order';

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
    async getAction(center:Order,text:string){
        await center.assert_supliment_name(text)
    }
    async getEnterCapsuleName(center:Order,name:string){
        await center.search_orders(name)
    }

}