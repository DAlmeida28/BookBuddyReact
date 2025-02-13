import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MyAccount = ({userAccount, setUserAccount}) => {
  const navigate = useNavigate();
  

  useEffect(() => {
    const getAccount = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`          
        }
      })
      const reply = await response.json();
      setUserAccount(reply);
   
    }
    getAccount();
  },[])

  return (
    <>
    {console.log(userAccount)}

      <h1>THIS IS MY ACCount page </h1>
      <h3>Account Details:</h3>
      <p>ID: {userAccount.id}</p>
      <p>Name: {userAccount.firstname} {userAccount.lastname}</p>
      <p>Email: {userAccount.email}</p>
      <p>Books Checked out: </p>

      <button onClick={() => {navigate('/')}}>Back to Book List</button>
 
    </>
  )
}

export default MyAccount