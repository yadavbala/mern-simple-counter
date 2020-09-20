
const typeCheck=(req,res,next)=>{
    const type=req.query.type
    console.log(type)
    if(type=='inc'){
        req.n=1
        console.log(req.n)
    }
    else if(type=='dec'){
        req.n=-1
       
    }
    else if(type=='reset'){
        req.n=0
        
    }
    else{
        throw new Error('invalid type')
    }
    next()
}

module.exports={typeCheck}