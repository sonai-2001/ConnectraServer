const ConnectionModel = require("../module/Connection");
const UserModel = require("../module/User");
const usersAllConnectionsService=async(userId)=>{
        const AllConnections=await ConnectionModel.find({
            $or:[
                {senderId:userId,
                    status:'accepted'},
                {receiverId:userId,
                    status:'accepted'}
            ]
        }).populate('senderId','first_name last_name profileImage')
        .populate('receiverId','first_name last_name profileImage')
        
        console.log(AllConnections)
        const modifiedConnections=AllConnections.map((connection)=>{
            const user=connection.senderId._id==userId?connection.receiverId:connection.senderId
            const {_id,first_name,last_name,profileImage}=user.toObject()
            const returnedData={
                userId:_id,
                first_name,
                last_name,
                profileImage,
                connectionId:connection._id
            }
            return returnedData
        })
        console.log(modifiedConnections)
        return modifiedConnections
}

const userAllRequestsSendService=async(userId)=>{
       const allRequestSend=await ConnectionModel.find({
            senderId:userId,
            status:'pending'
       }).populate('receiverId','first_name last_name profileImage')

       const modifiedConnections=allRequestSend.map((connection)=>{
                const user= connection.receiverId
                const {_id,first_name,last_name,profileImage}=user.toObject()
                const returnedData={
                    userId:_id,
                    first_name,
                    last_name,
                    profileImage,
                    connectionId:connection._id
                }
                return returnedData
                }      
       )
       return modifiedConnections
}

const userAllRequestsGetService=async(userId)=>{
     const allRequestGet=await ConnectionModel.find({
        receiverId:userId,
        status:'pending'
     }).populate('senderId','first_name last_name profileImage')  
     const modifiedConnections=allRequestGet.map((connection)=>{
            const user= connection.senderId
            const {_id,first_name,last_name,profileImage}=user.toObject()
            const returnedData={
                userId:_id,
                first_name,
                last_name,
                profileImage,
                connectionId:connection._id
            }
            return returnedData
     }) 
     return modifiedConnections
    }


    const userAllSuggetionsService=async(userId)=>{
        //  find  connected users with the logged in user

      const conn =  await ConnectionModel.find({
            $or:[
              {senderId:userId},
              {receiverId:userId}
            ]
        })

       const existingConn =new Set() 


    //    only unique users
       conn.forEach((con)=>{
           existingConn.add(con.senderId)
           existingConn.add(con.receiverId)
       })

    //    find the not connected/requested/accepted users

       const suggestions = await UserModel.find({
            _id:{$nin:Array.from(existingConn)},
       }).select('_id first_name last_name profileImage')

    //    return the suggestions
       return suggestions




    }

module.exports={
    usersAllConnectionsService,
    userAllRequestsSendService,
    userAllRequestsGetService,
    userAllSuggetionsService
}