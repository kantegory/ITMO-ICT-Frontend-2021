import React, { Component } from 'react'
import { dateTimeToStr } from '../utils/time'
import { Modal, Button, Form } from 'react-bootstrap';
import OrderGoodCompact from '../components/OrderGoodCompact'
import CouriersAPI from '../api/couriersAPI'


class CompactOrder extends Component {
    constructor() {
        super();
        this.state = {displayOrderGoods: false, showModal: false, couriers: [], courierId: null};

        this.showHideItems = this.showHideItems.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setCouriers = this.setCouriers.bind(this);
        this.completeOrder = this.completeOrder.bind(this);
        this.setOrderCourier = this.setOrderCourier.bind(this);
    }

    componentDidMount() {
        this.setCouriers();
    }

    async setCouriers() {
        let couriersApi = new CouriersAPI();
        let data = await couriersApi.list();

        this.setState({
            couriers: data,
        })
    }

    showHideItems() {
        this.setState({
            displayOrderGoods: !this.state.displayOrderGoods
        });
    }

    handleShow() {
        this.setState({
            showModal: true
        })
    }

    handleClose() {
        this.setState({
            showModal: false
        })
    }
    
    setOrderCourier(event) {
        this.setState({
            courierId: event.target.value
        })
    }

    completeOrder(event) {
        event.preventDefault();

        if(this.state.courierId === null) {
            return;
        }
    }

    render() {
        return (
            <div>
                <div className="mb-3 card border-0 position-relative">
                    {!this.props.order.has_completed && 
                        <span style={{
                            height: "12px",
                            width: "12px",
                            position: "absolute",
                            top: "16px",
                            left: "16px",
                            backgroundColor: "#FF4848",
                            borderRadius: "100%",
                        }}></span>
                    }

                    <div className="card-body" style={{padding: "0px 45px 25px 45px"}}>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p style={{fontSize: "36px", fontWeight: "bold"}}>
                                    Заказ №{this.props.order.id}
                                    <time style={{fontSize: "18px"}}>{dateTimeToStr(this.props.order.ordered_time)}</time>
                                </p>
                                <p>{this.props.order.has_completed}</p>
                                <p>Сумма заказа: {this.props.order.total_price} ₽</p>
                            </div>
                            <p class="align-self-center color-purpure fw-bold cursor-pointer" onClick={this.showHideItems}>
                                {this.state.displayOrderGoods ? "Скрыть" : "Подробнее"}
                            </p>
                        </div>

                        {!this.props.order.has_completed &&
                            <Button variant="danger" onClick={this.handleShow}>
                                Завершить заказ
                            </Button>
                        }
                        
                        <div id="orderGoods" style={{display: this.state.displayOrderGoods ? "block" : "none"}}>
                            {this.props.order.goods.map(
                                (order_good) => <img 
                                    style={{height: "99px"}}
                                    key={order_good.good.id} 
                                    src={order_good.good.icon} 
                                    alt={order_good.good.description}/>
                            )}
                        </div>


                        <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Состав заказа №{this.props.order.id}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    this.props.order.goods.map(
                                        (orderGood) => 
                                            <OrderGoodCompact 
                                                good={orderGood.good} 
                                                amount={orderGood.amount}
                                            />
                                    )
                                }
                                <div class="d-flex justify-content-between">
                                    <p>Общая стоимость заказа</p>
                                    <p class="fw-bold">{this.props.order.total_price}₽</p>
                                </div>
                                

                                <Form onSubmit={this.completeOrder}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Выберите курьера</Form.Label>
                                        <Form.Select aria-label="Выберите курьера" onChange={this.setOrderCourier}>
                                            {this.state.couriers.map(
                                                (courier) => 
                                                <option 
                                                    key={courier.id} 
                                                    value={courier.id}
                                                >{courier.first_name} {courier.last_name} ({courier.room_number})</option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="success" type="submit">
                                        Завершить заказ
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompactOrder;