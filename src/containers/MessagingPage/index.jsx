import React, { useState, useEffect, createRef } from 'react'
import Talk from "talkjs"
import Header from '../../components/Header'
import './style.scss'

const Messaging = () => {
  const [currentUser, setCurrentUser] = useState({})
  const inboxRef = createRef()

  useEffect(() => {
    const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
      if (currentTalkjsUser) {
        setCurrentUser(JSON.parse(currentTalkjsUser))
      }
  }, [])

    Talk.ready
      .then(() => {
          const me = new Talk.User(currentUser);
          
          if (!window.talkSession) {
              window.talkSession = new Talk.Session({
                  appId: process.env.REACT_APP_APP_ID,
                  me: me
              });
          }
      
          const inbox = window.talkSession.createInbox();
          inbox.mount(inboxRef.current);

      })
      .catch(e => console.error(e));

  return (
    <>
      <Header />
      <div style={{ height: '500px' }} className="inbox-container" ref={inboxRef}>
        Loading...
      </div>
    </>
  )
}

export default Messaging
