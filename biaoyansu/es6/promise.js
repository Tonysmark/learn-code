function timeout(ms){
    return new Promise((ressolve,reject)=>{
        setTimeout(ressolve,ms,'done');
    })
}
timeout(100).then((value)=>{
    console.log(value);
    
})