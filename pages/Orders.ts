import { expect, Locator, Page } from "@playwright/test";
import { Order } from "../interfaces/Order";

export class Orders implements Order{
    readonly order_id_or_product_id_or_name:Locator
    readonly supliment_name_text:Locator
    constructor(private page:Page){
        this.page=page
        this.supliment_name_text = page.getByTestId("order_items_MS-9255-CZ")
        this.order_id_or_product_id_or_name = page.getByPlaceholder("Order ID or product name")
    }
    async assert_supliment_name(supliment_name: string): Promise<void> {
        await expect(this.supliment_name_text).toHaveText(supliment_name)
    }
    async search_orders(order_id_or_product_name: string): Promise<void> {
        await this.order_id_or_product_id_or_name.fill(order_id_or_product_name)
        await this.order_id_or_product_id_or_name.press("Enter")
    }

}