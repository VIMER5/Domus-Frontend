import { io } from "socket.io-client";
const socket = io("http://localhost:2335");

export default socket;
