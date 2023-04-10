var Sale = require('../model/sale.js');
//get
const getSale = (req, res)=>{
    Sale.find({},(err,sale)=>{
        if(err){
            return res.status(500).send({message:'Error al listar las ventas'});
        }
        res.status(200).send({sale});
    })
}
//post
const insertSale = (req, res) =>{
    try{ 
        let sale = new Sale();
        sale.date= req.body.date;
        sale.total = req.body.total;
        sale.user = req.body.user;
        sale.save((err,saleStore)=>{
            if(err){
                return res.status(500).send({message:'No fue posible ingresar la venta'});
            }
            res.status(200).send({message:'Venta ingresada con exito'});
        });
    }catch(err){
        return res.status(500).send({message:'Error interno'});
    }
}
//put
const updateSale = (req, res) =>{
    let id = req.params._id;
    let date = req.body.date;
    let total = req.body.total;
    let user = req.body.user;
    Sale.findByIdAndUpdate(id, {date: date, total: total, user: user},(err,sale)=>{
        if(err){
            return res.status(500).send({message:'No fue posible actualizar la venta'});
        }
        if(!sale){
            return res.status(404).send({message:'No se encuentra la venta'});
        }
        res.status(200).send({message:'Venta actualizada con exito'});
    })
}
//delete
const deleteSale = (req, res) => {
    let id = req.params._id;
    Sale.findById(id, (err,sale)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        sale.remove((err)=>{
            if(err){
                return res.status(500).send({mesage:'No fue posible eliminar'});
            }
            res.status(200).send({message:'Venta eliminada'});
        })
    })
}
//searchById
const searchSaleById = (req, res) =>{
    let id = req.params._id;
    Sale.findById(id,(err, sale)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        if(!sale){
            return res.status(404).sen({message:'No se encontro la venta'});
        }
        res.status(200).send({sale});
    })
}
module.exports = {getSale, insertSale, updateSale, deleteSale, searchSaleById};
