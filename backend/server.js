

require('dotenv').config();
const express = require('express')
const app = express();


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}

const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

//app.use('https://limitless-mountain-76497.herokuapp.com/api/products', productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

