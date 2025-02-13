import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setToken }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();


  const submitRegister = async (event) => {
    event.preventDefault();

    const reponse = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',{ 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstName,
        lastname: lastName,
        email: emailRegister,
        password: passwordRegister
      })
    }
  )
const { token } = await reponse.json();
// setToken(token);
localStorage.setItem('token', token);
  }

const loginRequest = async (event) => {
  event.preventDefault();

  const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailLogin,
      password: passwordLogin
    })
  })
  const { token } = await response.json();
  setToken(localStorage.setItem('token', token));
  navigate('/myaccount');
}

  return (
    <>

    {showLogin ?
    <>
      <input onChange={((event) => {setEmailLogin(event.target.value)})}type="email" placeholder="email"/>
      <input onChange={((event) => {setPasswordLogin(event.target.value)})}type="password" placeholder="password"/>
      <button onClick={loginRequest}>Login</button>
      <button onClick={() => {setShowLogin(false)}}> Register </button> 
      <button onClick={() => {navigate('/')}}>Back to Book List</button>
    </>     
      :
      <section>
        <form onSubmit={submitRegister}>
          <input onChange={(event) => {setFirstName(event.target.value)}}placeholder="firstname"/>
          <input onChange={(event) => {setLastName(event.target.value)}}placeholder="lastname"/>
          <input onChange={(event) => {setEmailRegister(event.target.value)}}type="email" placeholder="email"/>
          <input onChange={(event) => {setPasswordRegister(event.target.value)}}type="password" placeholder="password"/>
          <button> Submit </button>
        </form>
      </section>
}
    </>
  )
}

export default Auth