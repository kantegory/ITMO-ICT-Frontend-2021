import BaseAPI from './APIUtils';

class OrdersAPI extends BaseAPI{
    path = 'api/order/'

    async makeOrder(cart, delivery_price) {
        const body = {
            shop: 1,
            customer: 1,
            delivery_price: delivery_price,
            goods: cart.goods.map(good => {
                return {
                    amount: good.count,
                    good: good.id,
                }
            })
        };
        const response = await this.post({body: body});
        return response;
    }

    async getUserOrders(user_id) {
        return this.list(
            `customer=${user_id}`
        )
    }
}

export default OrdersAPI;