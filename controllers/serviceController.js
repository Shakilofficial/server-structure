const { getCollection } = require("../config/db");

const getServices = async (req, res) => {
  const serviceCollection = getCollection("services");
  const result = await serviceCollection.find({}).toArray();
  res.send(result);
};

module.exports = { getServices };
