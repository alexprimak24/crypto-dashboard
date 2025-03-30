import { signInWithGoogle } from '../services/api/auth';

// type SignupFields = {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

function Login() {
  return (
    <>
      <button onClick={signInWithGoogle}>LOGIN WITH Google</button>
    </>
  );
}

export default Login;
