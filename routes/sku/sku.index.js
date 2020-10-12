const express = require('express');
const router = express.Router()

const {getAllSku,getSkuById,addSku,skuUpdate,skuDelete} = require("./sku.controller")

router.get("/", getAllSku)
router.get('/sku/:id',getSkuById)
router.post('/sku',addSku)
router.put('/sku/:id',skuUpdate)
router.delete('/:id',skuDelete)



module.exports = router