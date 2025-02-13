import { useNavigate } from "react-router-dom"

const Auth = () => {
const navigate = useNavigate();

  return (
    <>
      <section>
        <button onClick={() => {navigate('/auth/')}}>Login/Register</button>
      </section>

      {
        localStorage.getItem('token') ? <button onClick={() => {navigate('/myaccount')}}>My Account</button> : null
      }
    </>
  )
}
export default Auth