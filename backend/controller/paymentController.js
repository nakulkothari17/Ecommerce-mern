const Payment = require('../models/Payment.js');

const getOrders = async (req, res) => {
    let history=[]
    let transactionData = {}

    req.body.cartdetails.forEach((item) => {
        history.push({
            dateOfPurchase: Date.now(),
            name: item.name,
            price: item.price,
            id: item.product,
            qty: item.qty,
            paymentId: req.body.paymentData.paymentID,
        })
    })
    transactionData.data = req.body.paymentData;
    transactionData.product = history;
    

    const payment = new Payment(transactionData);
    payment.save((err, doc)=>{
        if(err) return res.json({success: false, err});
    });
    // console.log("Im here");
    // console.log(transactionData);
    // try{
    //         //await Payment.deleteMany({});
    //         await Payment.insertMany(transactionData);
    //         console.log("Data import success!");
    //         process.exit();
    //     }catch( error){
    //         console.log(error.message);
    //         process.exit(1);
    //     }
    // }
    //     importData();
    
}
module.exports = {
    getOrders
}