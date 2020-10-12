const Sku = require('../../models/Brand');


module.exports={
    getAllBrand: (req,res) =>{
        Brand.findAll({
        })
        .then(data=>{
            res.json(data)
        })
    },

    addBrand: (req,res)=>{
        Brand.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(data=>{
            res.send(data)
        })
    },


    getBrandById: (req,res) =>{
        Brand.findOne({where: {id: req.params.id}})
        .then(data =>{
            res.json(data);
        })
    },

    brandUpdate: (req,res) =>{
        const id = req.params.id;
        Category.update({
            name: req.body.name,
        }, {where:{id: req.params.id}})
        .then(()=>{
            res.status(200).send('Update success')
        })
    },

    BrandDelete: (req,res) =>{
        const id = req.params.id;
        Brand.destroy({where:{id:id}})
        .then(()=>{
            res.status(200).send('deleted success')
        })
    }
}

