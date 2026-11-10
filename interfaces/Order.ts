export interface Order{

    search_orders(order_id_or_product_name:string):Promise<void>
    assert_supliment_name(supliment_name:string):Promise<void>
}