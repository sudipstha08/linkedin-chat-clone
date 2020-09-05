import React, { useState, useEffect, createRef } from 'react'
import Talk from "talkjs"
import { dummyUsers } from "./index.helper"
import Header from '../../components/Header'
import './style.scss'

const MyNetwork = () => {
  const [currentUser, setCurrentUser] = useState({})
  const chatboxContainerRef = createRef()

  useEffect(() => {
    const currentTalkjsUser = localStorage.getItem('currentTalkjsUser')

    if (currentTalkjsUser) {
      setCurrentUser(JSON.parse(currentTalkjsUser))
    }
  }, [])

  const handleClick = (userId) => {

    /* Retrieve the two users that will participate in the conversation */
    const user = dummyUsers.find(user => user.id === userId)

    /* Session initialization code */
    Talk.ready
    .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user)

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
            window.talkSession = new Talk.Session({
                appId: process.env.REACT_APP_APP_ID,
                me: me
            });
        } 
        
        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        
        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        const chatbox = window.talkSession.createChatbox(conversation);
        chatbox.mount(chatboxContainerRef.current);
    })            
    .catch(e => console.error(e));
}

  return (
    <>
      <Header />
      <div className="users">
        <div className="current-user-container">
          {currentUser &&
            <div>
              <picture className="current-user-picture">
                <img alt={currentUser.name} src={currentUser.photoUrl}/>
              </picture>
              <div className="current-user-info">
                <h3>{currentUser.name}</h3>
                <p>{currentUser.description}</p>
              </div>
            </div>
          }
        </div>
        <div className="users-container">
          <ul>
            {dummyUsers.map(user =>
              <li key={user.id} className="user">
                <picture className="user-picture">
                  <img src={user.photoUrl} alt={`${user.name}`} />
                </picture>
                <div className="user-info-container">
                  <div className="user-info">
                    <h4>{user.name}</h4>
                    <p>{user.info}</p>
                  </div>
                  <div className="user-action">
                    <button onClick={userId => handleClick(user.id)}>Message</button>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="chatbox-container" ref={chatboxContainerRef}>
        <div id="talkjs-container" style={{height: "300px"}}>
          <i></i>
        </div>
      </div>
    </>
  )
}
export default MyNetwork;