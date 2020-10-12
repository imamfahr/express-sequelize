const Sku = require('../models/sku');


module.exports={
    getAllSku: (req,res) =>{
        Sku.findAll({
        })
        .then(data=>{
            res.json(data)
        })
    },

    addSku: (req,res)=>{
        Sku.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(data=>{
            res.send(data)
        })
    },


    getSkuById: (req,res) =>{
        Sku.findOne({where: {id: req.params.id}})
        .then(data =>{
            res.json(data);
        })
    },

    skuUpdate: (req,res) =>{
        const id = req.params.id;
        Category.update({
            name: req.body.name,
        }, {where:{id: req.params.id}})
        .then(()=>{
            res.status(200).send('Update success')
        })
    },

    skuDelete: (req,res) =>{
        const id = req.params.id;
        Sku.destroy({where:{id:id}})
        .then(()=>{
            res.status(200).send('deleted success')
        })
    }
}

