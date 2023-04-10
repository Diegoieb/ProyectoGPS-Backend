var Product = require('../model/products.js');
//get
const getProduct = (req, res)=>{
    Product.find({},(err,product)=>{
        if(err){
            return res.status(500).send({message:'Error al listar los productos'});
        }
        res.status(200).send({product});
    })
}
//post
const insertProduct = (req, res) =>{
    try{ 
        let product = new Product();
        product.name=req.body.name;
        product.description=req.body.description;
        product.price= req.body.price;
        product.save((err,productStore)=>{
            if(err){
                return res.status(500).send({message:'No fue posible ingresar el producto'});
            }
            res.status(200).send({productStore});
        });
    }catch(err){
        return res.status(500).send({message:'Error interno'});
    }
}
//put
const updateProduct = (req, res) =>{
    let id = req.params._id;
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    Product.findByIdAndUpdate(id, {name:name,description:description,price:price},(err,product)=>{
        if(err){
            return res.status(500).send({message:'No fue posible actualizar el producto'});
        }
        if(!product){
            return res.status(404).send({message:'No se encuentra el producto'});
        }
        res.status(200).send({product});
    })
}
//delete
const deleteProduct = (req, res) => {
    let id = req.params._id;
    Product.findById(id, (err,product)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        product.remove((err)=>{
            if(err){
                return res.status(500).send({mesage:'No fue posible eliminar'});
            }
            res.status(200).send({message:'Producto eliminado'});
        })
    })
}
//searchById
const searchProductById = (req, res) =>{
    let id = req.params._id;
    Product.findById(id,(err, product)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        if(!product){
            return res.status(404).sen({message:'No se encontro el producto'});
        }
        res.status(200).send({product});
    })
}
module.exports = {getProduct, insertProduct, updateProduct, deleteProduct, searchProductById};
