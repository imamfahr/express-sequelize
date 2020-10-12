const express = require('express');
const router = express.Router()

const {getAllBrand,getBrandById,addBrand,brandUpdate,BrandDelete} = require("./brand.controller")

router.get("/", getAllBrand)
router.get('/brand/:id',getBrandById)
router.post('/brand',addBrand)
router.put('/brand/:id',brandUpdate)
router.delete('/:id',BrandDelete)



module.exports = router