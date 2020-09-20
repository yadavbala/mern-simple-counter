const express=require('express')

const router=express.Router()

const countersCltr=require('../app/controllers/countersCltr')
const { typeCheck } = require('../app/middlewares/express-validate')


router.get('/api/counters',countersCltr.list)
router.post('/api/counters',countersCltr.create)
router.put('/api/counters/:id',typeCheck,countersCltr.update)
router.delete('/api/counters/:id',countersCltr.destroy)
module.exports=router