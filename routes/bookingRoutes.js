const express = require("express");
const bookingRouter = express.Router();

const {createSession} = require("../controller/bookingController")

bookingRouter.post('/createSession',createSession);

bookingRouter.get('/createSession',function(req,res){
    res.sendFile("C:\\Users\\91935\\Desktop\\dev2\\module5x\\foodAppBackend\\booking.html")
})

module.exports = bookingRouter;