var express=require("express")
var app=express();
var router=express.Router();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

var connect=require("./db.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
console.log("error")

var path = require("path");

app.use(express.static(path.join(__dirname, "public")));//should give like this only


mongoose.connect("mongodb://localhost/userlist",function(){

	console.log("database connected sucessfully")
})

router.post("/create",function(request,response){
         var userobj=request.body;
	connect.createContact(userobj,function(err,data){
		if(err)
		{
			throw err;
		}
		response.json(data)
	})

})

router.get("/getuser",function(req,res){

	console.log("hi im comming")
	connect.getuser(function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})

router.get("/getuserbyid/:id",function(request,response){
	var id=request.params.id;
	connect.getuserbyid(id,function(err,data){
		if(err){
			throw err;
		}
		response.json(data)
	})
})
router.put("/update/:id",function(request,response){
	var id=request.params.id;
    var obj=request.body
	connect.editUser(id,obj,function(err,data){
		if(err){
			throw err;
		}
		response.json(data)
	})
})

router.delete("/delete/:id",function(request,response){
	var id=request.params.id;
	connect.delete(id,function(err,data){
		if(err){
			throw err;
		}
		response.json(data);
	})
})

app.use("/",router);

var port=process.env.PORT||1002;

app.listen(port,function(){
	console.log("server connected  looking at the port",port)
})