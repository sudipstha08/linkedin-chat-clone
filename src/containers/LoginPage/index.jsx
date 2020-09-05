import React, { useState, useEffect } from "react"
import './style.scss'

const LoginPage = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [desp, setDesp] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'desp':
        setDesp(value)
        break
      default:
        break
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const randomNum = Math.ceil(Math.random() * 9999);
    const userData = {
      name,
      email,
      desp,
      id: randomNum,
      role: "Member",
      photoUrl: "https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80"
    }

    localStorage.setItem("currentTalkjsUser", JSON.stringify(userData))
    history.push("/mynetwork");
  }
    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="input"
              required
            />
            <textarea type="text"
              name="desp"
              onChange={handleChange}
              placeholder="Short Description"
              className="input textarea">
            </textarea>
            <input type="submit"
              className="button"
              placeholder="submit"
            />
          </form>
        </div>
      </div>
    )
}
export default LoginPage