const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
   
    data:{
        type:Array,
        default: [],

    },
    product:{
        type:Array,
        default: []
    }
})

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;