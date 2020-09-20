const Counter=require('../models/counters')


const countersCltr={}

countersCltr.list=(req,res)=>{
    Counter.find()
        .then((counters)=>{
            res.json(counters)
        })
        .catch((err)=>{
            res.json(err)
        })
}

countersCltr.create=(req,res)=>{
    const counter=new Counter()
    console.log('pre',counter)
    counter.save()
            .then((counter)=>{
                console.log('post',counter)
                res.json(counter)
            })
            .catch((err)=>{
                res.json(err)
            })
}

//  /api/counters/:id?type=inc
countersCltr.update=(req,res)=>{
    const id=req.params.id
    let obj
    req.n!=0 ? obj={$inc :{value:req.n}}:obj={value:0}
    Counter.findByIdAndUpdate(id,obj,{new:true,runValidators:true})
            .then((counter)=>{
                if(counter){
                    res.json(counter)
                }
                else{
                    res.json({})
                }
                
            })
            .catch((err)=>{
                res.json(err)
            })
}



countersCltr.destroy=(req,res)=>{
    const id=req.params.id
    Counter.findByIdAndDelete(id)
            .then((counter)=>{
                if(counter){
                    res.json(counter)
                }
                else{
                    res.json({})
                } 
            })
            .catch((err)=>{
                res.json(err)
            })
}
module.exports=countersCltr