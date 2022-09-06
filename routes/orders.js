const router = require('express').Router();
const orderController = require('../controller/order-controller');

//create order:
router.post('/create', orderController.createOrder);


//update order:
router.put('/update/:orderID', orderController.updateOrder);


//order by date:
router.post('/update/:orderDate', orderController.orderListByDate);



//list order by orderData:
router.post('/list', orderController.orderListByDate);



//search order by orderID:
router.post('/search/:orderID', orderController.searchOrderByOrderId);



//delete order:
router.delete('/delete/:orderID', orderController.deleteOrderByOrderId);




//exporting the router:
module.exports = router;    