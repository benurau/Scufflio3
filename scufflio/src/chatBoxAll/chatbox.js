import React, { Component,useState} from "react"
import mugus from '../photos/gusgus.png'
import ChatForm from "./chatInner"
import ChatWindow from "./chatwindow"
import './styles.css'


export default class Chatbox extends Component {
   
    
      render() {
        return (
          <div  className="ChatBox">
            <ChatWindow/>
            <ChatForm />
          </div>
        );
      }
    }