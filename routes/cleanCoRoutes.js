const express = require("express");
const { getServices } = require("../controllers/serviceController");
const { getUserBookings, createBooking, deleteBooking } = require("../controllers/bookingController");
const { createAccessToken } = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

// <--GET ROUTES ENDPOINT-->
router.get("/", (req, res) => res.send("Welcome to Clean Co API"));
router.get("/services", verifyToken, getServices);
router.get("/user/bookings", verifyToken, getUserBookings);

// <--POST ROUTES ENDPOINT-->
router.post("/auth/access-token", createAccessToken);
router.post("/user/create-booking", createBooking);

// <--DELETE ROUTES ENDPOINT-->
router.delete("/user/cancel-booking/:bookingId", deleteBooking);

module.exports = router;
