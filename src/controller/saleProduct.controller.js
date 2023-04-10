
var saleProduct = require('../model/saleProduct.js');
//get
const getSaleProduct = (req, res)=>{
    saleProduct.find({},(err,saleProductS)=>{
        if(err){
            return res.status(500).send({message:'Error al listar los productos'});
        }
        res.status(200).send({saleProductS});
    })
}
//post
const insertSaleProduct = (req, res) =>{
    try{ 
        let saleProdu = new saleProduct();
        saleProdu.product= req.body.product;
        saleProdu.sale=req.body.sale;
        saleProdu.amountP=req.body.amountP;
        saleProdu.subTotal= req.body.subTotal;
        saleProdu.save((err,saleProduStore)=>{
            if(err){
                return res.status(500).send({message:'No fue posible ingresar la venta del producto'});
            }
            res.status(200).send({saleProduStore});
        });
    }catch(err){
        return res.status(500).send({message:'Error interno'});
    }
}
//put
const updateSaleProduct = (req, res) =>{
    let id = req.params._id;
    let product = req.body.Product;
    let sale = req.body.sale;
    let amountP = req.body.amountP;
    let subTotal= req.body.subTotal;
    saleProduct.findByIdAndUpdate(id, {product:product, sale:sale,amountP:amountP,subTotal:subTotal},(err,saleProduc)=>{
        if(err){
            return res.status(500).send({message:'No fue posible actualizar la venta de producto'});
        }
        if(!saleProduc){
            return res.status(404).send({message:'No se encuentra la venta de producto'});
        }
        res.status(200).send({saleProduc});
    })
}
//delete
const deleteSaleProduct = (req, res) => {
    let id = req.params._id;
    saleProduct.findById(id, (err,saleProduc)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        saleProduc.remove((err)=>{
            if(err){
                return res.status(500).send({mesage:'No fue posible eliminar'});
            }
            res.status(200).send({message:'Venta producto eliminada'});
        })
    })
}
//searchById
const searchSaleProductById = (req, res) =>{
    let id = req.params._id;
    saleProduct.findById(id,(err, saleProduc)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        if(!saleProduc){
            return res.status(404).sen({message:'No se encontro la venta de producto'});
        }
        res.status(200).send({saleProduc});
    })
}
module.exports = {getSaleProduct, insertSaleProduct, updateSaleProduct, deleteSaleProduct, searchSaleProductById};
