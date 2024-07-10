const { ObjectId } = require("mongodb");
const { getCollection } = require("../config/db");

const getUserBookings = async (req, res) => {
  const queryEmail = req.query.email;
  const tokenEmail = req.user.email;

  if (queryEmail !== tokenEmail) {
    return res.status(403).send({ message: "Forbidden Access" });
  }

  const bookingCollection = getCollection("bookings");
  const result = await bookingCollection.find({ email: queryEmail }).toArray();
  res.send(result);
};

const createBooking = async (req, res) => {
  const booking = req.body;
  const bookingCollection = getCollection("bookings");
  const result = await bookingCollection.insertOne(booking);
  res.send(result);
};

const deleteBooking = async (req, res) => {
  const id = req.params.bookingId;
  const query = { _id: new ObjectId(id) };
  const bookingCollection = getCollection("bookings");
  const result = await bookingCollection.deleteOne(query);
  res.send(result);
};

module.exports = { getUserBookings, createBooking, deleteBooking };
