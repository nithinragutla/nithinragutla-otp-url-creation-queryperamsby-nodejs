var http=require("http")
var server=http.createServer((req,res)=>{

var otp=""
    for(i=0;i<3;i++){
var a=Math.floor(Math.random()*10)
otp+=a
    }
    var obj={
        "otp":otp
    }
    res.statuscode=200;
    res.write(JSON.stringify(obj));
    res.end()
})
server.listen(3002,()=>{
    console.log("connected")
})