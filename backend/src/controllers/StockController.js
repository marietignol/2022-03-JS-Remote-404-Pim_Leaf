const models = require("../models");

class StockController {
  static add = (req, res) => {
    models.stock
      .addStock(
        req.body.product_id,
        req.params.id,
        req.body.supplier_id,
        req.body.disponibility
      )
      .then(([result]) => {
        res.status(201).send({ ...req.body, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = StockController;
