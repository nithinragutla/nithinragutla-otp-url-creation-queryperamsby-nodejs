const http=require("http")
var {add,mul,sub,div,mod}=require("./operations.js")
const url=require("url")

let server=http.createServer((req,res)=>{
    var parsed=url.parse(req.url);
    var path=parsed.pathname
    if(path=="/sum"){
        res.status=200;
        res.write(JSON.stringify(add(1,2,3,4,5)))
    }
    else if(path=="/mul"){
        res.status=200;
        res.write(JSON.stringify(mul(1,2,3,4,5)))
    }
    else if(path=="/sub"){
        res.status=200;
        res.write(JSON.stringify(sub(1,2,3,4,5)))
    }
    else if(path=="/div"){
        res.status=200;
        res.write(JSON.stringify(div(1,2,3,4,5)))
    }
    else if(path=="/mod"){
        res.status=200;
        res.write(JSON.stringify(mod(1,2,3,4,5)))
    }else{
        res.write("the path operation is required")
    }

    res.end();
});

server.listen(3000,()=>{
    console.log("connected");
})
