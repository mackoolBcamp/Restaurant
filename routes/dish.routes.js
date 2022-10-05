const { Router } = require("express");
const router = Router();
const {
  dishesGet,
  dishesPost,
  dishesPut,
  DishesDelete,
} = require("../controllers/dish.controllers");

router.get("/");
router.post("/");
router.put("/");
router.delete("/");

module.exports = router;
