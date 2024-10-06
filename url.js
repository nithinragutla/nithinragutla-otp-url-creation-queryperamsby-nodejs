var http = require("http")

url = require("url")

var { fun } = require("./url-require")

var server = http.createServer((req, res) => {
    var parsed = url.parse(req.url)
    var a = parsed.query

    var b = parsed.pathname
    if (req.method == "POST" && b == "/request") {
        obj = { res: "registration sucessfull", details: fun(a) }
        
        res.write(JSON.stringify(obj))
    } else {
        res.write("hi hello")
    }
    res.end()



})
server.listen(3000, () => {
    console.log("connected")
})