const mysql = require('@mysql/xdevapi')

const config ={
    password:`${process.env.PASSWORD}`,
    user:`root`,
    host:'localhost',
    port:33060
    
}
mysql
    .getSession(config)
    .then(session =>{
        console.log(session.inspect())
    })

module.exports=mysql