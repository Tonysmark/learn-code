const fs = require('fs')
const child_process = require('child_process')
let work_process = child_process.exec('python process.py',(err,stdout,stderr,)=>{
    if(err){
        console.log(err.stack)
    } else{

        console.log(stdout)
        console.log(stderr)
    }
    work_process.on('exit',()=>{
        console.log('子进程退出')
    })
})