import socketIOClient from "socket.io-client";
const ENDPOINT = "https://pacific-lowlands-27356.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);
export default socket