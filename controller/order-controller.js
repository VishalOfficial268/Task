const moment = require("moment");
const OrderModel = require('../model/order');

//create order:  ********** tested working fine **********
const createOrder = async (req, res, next) => {
    try {
        let body = req.body;
        let { order_id } = body;
        if (order_id) {
            let existingOrder = await OrderModel.findOne({ order_id: order_id });
            if (existingOrder) {
                res.json({ status: "success", message: "Order Id already exists." });
            } else {
                const order = new OrderModel(body);
                const saveOrder = await order.save();
                if (saveOrder) {
                    res.json({ status: "success", message: "Order created successfully" });
                }
            }
        } else {
            res.json({ status: "success", message: "Please provide order id." });
        }
    } catch (error) {
        next(error);
    }
}


//update order: ********** tested working fine **********
const updateOrder = async (req, res, next) => {
    try {
        let orderId = req.params.orderID;
        if (orderId) {
            let { delivery_date } = req.body;
            let updateOrder = await OrderModel.findOneAndUpdate({ order_id: orderId }, { delivery_date }, { new: true });
            if (updateOrder) {
                res.json({ status: "success", message: "Order updated successfully.", data: updateOrder });
            } else {
                res.json({ status: "success", message: "Something went wrong." });
            }
        } else {
            res.json({ status: "success", message: "Please provide order id." });
        }

    } catch (error) {
        next(error);
    }
}

//get order by date: ********** tested working fine **********
const orderListByDate = async (req, res, next) => {
    try {
        let orderDate = req.body.order_date
        if (orderDate) {

            let order = await OrderModel.find({ order_date: { $gte: orderDate } });
            if (order && order.length) {
                res.json({ status: "success", message: "Orders found.", data: order });
            } else {
                res.json({ status: "success", message: "Orders could not found." });
            }
        } else {
            res.json({ status: "success", message: "Please provide order date." });
        }
    } catch (error) {
        next(error);
    }
}

//get order by orderId: ********** tested working fine **********
const searchOrderByOrderId = async (req, res, next) => {
    try {
        let orderId = req.params.orderID;
        if (orderId) {
            let order = await OrderModel.findOne({ order_id: orderId });
            if (order) {
                res.json({ status: "success", message: "Orders found.", data: order });
            } else {
                res.json({ status: "success", message: "Orders could not found." });
            }
        } else {
            res.json({ status: "success", message: "Please provide order date." });
        }
    } catch (error) {
        next(error);
    }
}


//delete order by orderID:  ********** tested working fine **********
const deleteOrderByOrderId = async (req, res, next) => {
    try {
        let orderId = req.params.orderID;
        if (orderId) {
            const deletedOrder = await OrderModel.findOneAndDelete(orderId);
            if (deletedOrder) {
                res.json({ status: "success", message: "Order has been deleted successfully." });
            }
        } else {
            res.json({ status: "success", message: "Please provide order Id." });
        }

    } catch (error) {
        next(error);
    }
}



module.exports = {
    createOrder,
    updateOrder,
    orderListByDate,
    searchOrderByOrderId,
    deleteOrderByOrderId
}
