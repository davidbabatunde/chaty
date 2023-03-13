function leaveRoom(userID, chatRoomUsers) {
  return chatRoomUsers.filter((user) => userID.id != userID);
}

module.exports = leaveRoom;
