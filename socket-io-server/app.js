const { get_Name,shuffleHost ,getRole,get_Current_User, user_Disconnect, join_User } = require("./players");
const express = require("express");
const {getWords,setAnswer,checkGuess} = require("./guesses")
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;



const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./build")));
const server = http.createServer(app);

const io = socketIo(server);



let interval;
io.on("connection", (socket) => {

  
  console.log("connected")
  

  
  

  

  socket.on('data',function (data) {
    socket.broadcast.emit('sendCoords', {x: data.x, y:data.y})
  });
  
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => getApiAndEmit(socket), 6000);
  socket.on("disconnect", () => {
    const p_user = user_Disconnect(socket.id);
    console.log("Client disconnected");
    clearInterval(interval);
  });

  socket.on('gus', data => {
    setAnswer(data)
  })

  socket.on("joinLobby", ({ username }) => {

    const p_user = join_User(socket.id, username);
    console.log(socket.id, "=id");
    socket.join(p_user);
  });

  socket.on('fromGuess',function (data){
    io.to(socket.id).emit("answer", checkGuess(data))
    io.emit('toGuess', {msg: data, usn:get_Name(socket.id)})
  });

});



const getApiAndEmit = socket => {
  var host = shuffleHost()
  var words = getWords()
  setAnswer(null)
  if (host != undefined){
    io.to(host.off).emit('turn', 0);
    io.to(host.off).emit('words',{words:words, turn:false})
    io.to(host.on).emit('turn', 1);
    io.to(host.on).emit('words', {words:words,turn:true});
  } else {
    io.emit('turn', 1)
    io.emit('words', words);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));