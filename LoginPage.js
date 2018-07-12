import React, {Component} from 'react'
import {login} from '../Actions/login'
import {signUp} from '../Actions/login'
import { connect } from 'react-redux'

const LoginPage = ({dispatch}) => {
  let email, password;
  return(

    <div>
      {console.log("called")}
      <p>hello</p>
      <form name="loginPage" onSubmit = { e=>{
        e.preventDefault()
        dispatch(login(email.value, password.value))
      }}>
      
            <lable> Email </lable>
            <input type="email" name="email" ref={ (node) => { email = node }} />

            <label> Password </label>
            <input type="password" name="password" ref={ (node) => { password = node }}/>
       
          <button type= "submit">
          Login</button>
       
          <button onClick={dispatch(signUp(email.value, password.value))}>
          Sign up</button>

      </form>
    </div>
   
  )
}

export default connect() (LoginPage)
