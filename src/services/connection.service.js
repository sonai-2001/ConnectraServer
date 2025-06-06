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
      { senderId: senderId, receiverId: reciverId },
      {
        senderId: reciverId,
        receiverId: senderId,
        status: { $in: ["pending", "accepted"] },
      },
    ],
  });
  if (existingConnection) {
    throw new Error("Connection already exists or accepted/rejected");
  }

  const existingRejectedConnctionFromSender = await ConnectionModel.findOne({
    senderId: reciverId,
    receiverId: senderId,
    status: "rejected",
  });
  if (existingRejectedConnctionFromSender) {
    existingRejectedConnctionFromSender.status = "pending";
    await existingRejectedConnctionFromSender.save();
    return existingRejectedConnctionFromSender;
  }

  const connection = new ConnectionModel({
    senderId,
    receiverId: reciverId,
  });
  console.info("connection", connection);
  const con = (await connection.save()).populate(
    "receiverId",
    "first_name last_name "
  );
  return con;
};







const connectionAcceptService = async (loggedInUserId, connectionId) => {
  // loggedInUserid is reciver
  if(!mongoose.Types.ObjectId.isValid(connectionId)){
    throw new Error("Invalid connection id")
  }
  const existingConnection=await ConnectionModel.findOne({
    _id:connectionId
  })
  if(!existingConnection || existingConnection.status!=="pending"){
    throw new Error("Pending request not found")
  }
  if(existingConnection.receiverId.toString()!==loggedInUserId){
    throw new Error("You can't accept this connection")
  }
  existingConnection.status="accepted"
  const updatedConnection=await existingConnection.save()
  return updatedConnection


};







const connectionRejectservice = async (loggedInUserId, connectionId) => {
   // loggedInUserId  is reciver
   if(!mongoose.Types.ObjectId.isValid(connectionId)){
      throw new Error('Invalid connection id')
   }
   const existingConnection=await ConnectionModel.findOne({
    _id:connectionId,
    receiverId:loggedInUserId
   })
   if(!existingConnection || existingConnection.status!=="pending"){
    throw new Error("Pending request not found")
   }

   existingConnection.status="rejected"
   const updatedConnection=await existingConnection.save()
   return updatedConnection

};





const connectionWidthrawalService = async (loggedInUserId, connectionId) => {
  //  here loggedInUser Id is Sender 
  if(!mongoose.Types,ObjectId.isValid(connectionId)){
      throw new Error('Invalid connection id')
  }

  const existingConnection=await ConnectionModel.findOne({
    _id:connectionId,
    senderId:loggedInUserId
  })

  if(!existingConnection || existingConnection.status!=="pending"){
    throw new Error("Pending request not found")
  }
    
  await existingConnection.deleteOne()




}
   

module.exports = {
  connectionRequestService,
  connectionAcceptService,
  connectionRejectservice,
  connectionWidthrawalService
};
