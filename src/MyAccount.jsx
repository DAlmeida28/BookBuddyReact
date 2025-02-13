import { useEffect } from "react"

const MyAccount = ({userAccount, setUserAccount}) => {
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
  }, [])
  //api call with sending token to get this user account details
  //return to this page and set the use state to App.jsx higher level
  //useEffect is needed for the api call
  return (
    <>
    {console.log(userAccount)}
      <h1>THIS IS MY ACCount page </h1>
      <h3>Account Details:</h3>
      <p>ID: {userAccount.id}</p>
      <p>Name: {userAccount.firstname} {userAccount.lastname}</p>
      <p>Email: {userAccount.email}</p>
      <p>Books Checked out: {userAccount.Books}</p>
 
    </>
  )
}

export default MyAccount