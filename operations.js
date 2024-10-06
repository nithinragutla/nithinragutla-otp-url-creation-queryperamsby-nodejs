function add(a,b,...c){
    let total=a+b
    for(i of c){
        total=total+i
    }
    return total
}
function sub(a,b,...c){
    let total=a-b
    for(i of c){
        total=total+i
    }
    return total
}
function mul(a,b,...c){
    let total=a*b
    for(i of c){
        total=total+i
    }
    return total
}
function div(a,b,...c){
    let total=a/b
    for(i of c){
        total=total+i
    }
    return total
}
function mod(a,b,...c){
    let total=a%b
    for(i of c){
        total=total+i
    }
    return total
}
module.exports={add,sub,mul,div,mod}