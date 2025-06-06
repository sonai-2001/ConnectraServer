const ConnectionModel = require("../module/Connection");
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

module.exports={
    usersAllConnectionsService,
    userAllRequestsSendService,
    userAllRequestsGetService
}