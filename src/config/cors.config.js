const cors = require("cors");

const OPTIONS = {
  origin: "*",
  credentials: true,
};

const corsConfig = cors(OPTIONS);

module.exports = corsConfig;
