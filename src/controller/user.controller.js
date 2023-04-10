var User = require('../model/user.js');
//get
const getUser = (req, res)=>{
    User.find({},(err,user)=>{
        if(err){
            return res.status(500).send({message:'Error al listar usuario'});
        }
        res.status(200).send({user});
    })
}
//post
const insertUser = (req, res) =>{
    try{ 
        let user = new User();
        user.name= req.body.name;
        user.password=req.body.password;
        user.save((err,userStore)=>{
            if(err){
                return res.status(500).send({message:'No fue posible ingresar el usuario'});
            }
            res.status(200).send({userStore});
        });
    }catch(err){
        return res.status(500).send({message:'Error interno'});
    }
}
//put
const updateUser = (req, res) =>{
    let id = req.params._id;
    let name = req.body.name;
    let password = req.body.password;
    User.findByIdAndUpdate(id, {name:name,password:password},(err,user)=>{
        if(err){
            return res.status(500).send({message:'No fue posible actualizar el usuario'});
        }
        if(!user){
            return res.status(404).send({message:'No se encuentra el usuario'});
        }
        res.status(200).send({user});
    })
}
//delete
const deleteUser = (req, res) => {
    let id = req.params._id;
    User.findById(id, (err,user)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        user.remove((err)=>{
            if(err){
                return res.status(500).send({mesage:'No fue posible eliminar'});
            }
            res.status(200).send({message:'Usuario eliminado'});
        })
    })
}
//searchById
const searchUserById = (req, res) =>{
    let id = req.params._id;
    User.findById(id,(err, use)=>{
        if(err){
            return res.status(500).send({message:'Error interno'});
        }
        if(!use){
            return res.status(404).send({message:'No se encontro el usuario'});
        }
        res.status(200).send({use});
    })
}
module.exports = {getUser, insertUser, updateUser, deleteUser, searchUserById};
