import BaseAPI from './APIUtils';

class GoodsAPI extends BaseAPI{
    path = 'api/good/'

    constructor(props) {
        super(props)
        this.shopId = props.shopId
    }

}

export default GoodsAPI;