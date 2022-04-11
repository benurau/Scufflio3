import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001/ih";
const socket = socketIOClient(ENDPOINT);
export default socket