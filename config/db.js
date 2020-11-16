const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/maktaba";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

const connection = mongoose.connection;

module.exports = connection;
