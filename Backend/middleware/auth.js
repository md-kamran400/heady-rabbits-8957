const jwt=require("jsonwebtoken")
const { Blacklist } = require("./Blocklist")

const auth=async(req,res,next)=>{
    const token= req.headers.authorization?.split(" ")[1]
    try {
      if(token){
       for(let i=0;i<Blacklist.length;i++){
        if(Blacklist[i]===token){
          // console.log(Blacklist[i])
          return res.status(401).send("please login Again!!")
        }
       }
        
       
         const decoder=jwt.verify(token,"masai")
         if(decoder)
          
        next()
        return
         }
         else{
          res.send("please login!")
         }
    } catch (error) {
      console.log(error)

    }
   

}
module.exports={auth}