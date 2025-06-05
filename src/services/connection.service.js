const UserModel = require("../module/User");
const ConnectionModel = require("../module/Connection");
const { default: mongoose } = require("mongoose");
const connectionRequestService = async (senderId, reciverId) => {
  console.info("senderid", senderId);
  console.info("reciverid", reciverId);

  if (senderId == reciverId) {
    throw new Error("You can't send connection to yourself");
  }
  if (!mongoose.Types.ObjectId.isValid(reciverId)) {
    throw new Error("Invalid reciver id");
  }
  const reciverUser = await UserModel.findOne({ _id: reciverId });
  if (!reciverUser) {
    throw new Error("Reciver user not found");
  }
  const existingConnection = await ConnectionModel.findOne({
    $or: [
      {
        senderId: senderId,
        receiverId: reciverId,
      },
      {
        senderId: reciverId,
        receiverId: senderId,
      },
    ],
  });
  if (existingConnection) {
    throw new Error("Connection already exists");
  }

  const connection = new ConnectionModel({
    senderId,
    receiverId: reciverId,
  });
  console.info("connection", connection);
  const con = await connection.save();
  return con;
};


const connectionAcceptService=async(senderId,reciverId)=>{
    console.info("senderid", senderId);
           if(!mongoose.Types.ObjectId.isValid(senderId)){
            throw new Error("Invalid sender id")
           }
           const senderUser=await UserModel.findOne({
            _id:senderId
           })
           if(!senderUser){
            throw new Error("Sender user not found")
           }
           const existingAcRejConnection=await ConnectionModel.findOne({
           $or:[
            {
                senderId:senderId,
                receiverId:reciverId,
                status:"accepted"
            },{
                senderId:reciverId,
                receiverId:senderId,
                status:"accepted"
            },{
                senderId:senderId,
                receiverId:reciverId,
                status:"rejected"
            },{
                senderId:reciverId,
                receiverId:senderId,
                status:"rejected"
            }
           ]
               })
               if(existingAcRejConnection){
                throw new Error("Connection already accepted or rejected")
               }
           const existingConnection=await ConnectionModel.findOne({
        senderId:senderId,
        receiverId:reciverId,
        status:"pending"
           })
           if(!existingConnection){
            throw new Error("Connection not found")
           }
           existingConnection.status="accepted"
           const updatedConnection=await existingConnection.save()
           return updatedConnection
           
}



module.exports = {
    connectionRequestService,
    connectionAcceptService
};
