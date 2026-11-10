import { Locator, Page } from "@playwright/test";
import { Order } from "../interfaces/Order";

export class Orders implements Order{
    readonly order_id_or_product_id_or_name:Locator
    constructor(private page:Page){
        this.page=page
        this.order_id_or_product_id_or_name = page.getByPlaceholder("Order ID or product name")
    }
    async search_orders(order_id_or_product_name: string): Promise<void> {
        await this.order_id_or_product_id_or_name.fill(order_id_or_product_name)
        await this.order_id_or_product_id_or_name.press("Enter")
    }

}