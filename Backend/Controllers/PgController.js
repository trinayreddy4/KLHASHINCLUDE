const crypto = require('crypto');
const dotenv = require('dotenv');
const Razorpay = require('razorpay');
dotenv.config();

const Order = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });
        const options = {
            amount: 100 * 100, // 100 INR in paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
            payment_capture: 1
        }
        const response = await instance.orders.create(options); // Corrected typo here
        res.status(200).send({
            order_id: response.id,
            currency: "INR",
            amount: response.amount
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Error Occurred" });
    }
}

const verify = async (req, res) => {
    const { paymentid } = req.params;

    const instance = new Razorpay({
        key_id: process.env.KEY_ID,
        key_secret: process.env.KEY_SECRET,
    });

    try {
        const payment = await instance.payments.fetch(paymentid);

        if (!payment) {
            return res.status(500).json("Error Loading");
        }

        res.status(200).json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        });
    } catch (e) {
        res.status(500).json("Error in Fetching");
    }
}

module.exports = { Order, verify };
