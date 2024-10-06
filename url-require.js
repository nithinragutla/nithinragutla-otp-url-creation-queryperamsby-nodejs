
function fun(a){
    a=a.split("&")
    obj={}
    for(i=0;i<a.length;i++){
        obj[a[i].split("=")[0]]=a[i].split("=")[1]
    }
    return obj
}
module.exports={fun}