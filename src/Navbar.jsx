import { useNavigate } from "react-router-dom"

const Auth = () => {
const navigate = useNavigate();

  return (
    <>
      <section>
        <button onClick={() => {navigate('/auth/')}}>Login/Register</button>
      </section>
    </>
  )
}
//login/register -> auth and defaults to login (login true) register button here then if clicked sets login to false
export default Auth