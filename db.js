var mongoose=require("mongoose");
var databaseSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}

});

var connect=module.exports=mongoose.model("user",databaseSchema,"user");

module.exports.createContact=function(userobj,callback){
	connect.create(userobj,callback);
	console.log("after create")

}

module.exports.getuser=function(callback){
	connect.find(callback);
}

module.exports.editUser=function(id,obj,callback){
	connect.update({_id:id},{$set:{
		                     name:obj.name,
		                     email:obj.email,
		                     mobile:obj.mobile,
		                     password:obj.password
	}},callback)
}

module.exports.getuserbyid=function(id,callback){
	connect.findById(id,callback);//it wiil take all the ids
}

module.exports.delete=function(id,callback){
	console.log(id);
	connect.remove({_id:id},callback);
}