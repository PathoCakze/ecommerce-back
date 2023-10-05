const UserRouter = require("./user.route");


module.exports = (app) => {
  app.use("/api/users", UserRouter);



  app.use("*", (req, res) => {
    console.error('Route non trouvée:', req.originalUrl);
    res.status(404).send("Erreur 404");
  });
};
