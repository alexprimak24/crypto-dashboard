import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithGithub } from '../services/auth';

type FormFields = {
  email: string;
  password: string;
};

// type SignupFields = {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    //that approeach will help us to preventDefault + will validate that all the form fields are valid before calling onSubmit
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="z-10">
        <input
          {...register('email', {
            required: 'Email is required',
            validate: (value: string) => {
              if (!value.includes('@')) {
                return 'Email must include @';
              }
              return true;
            },
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div>{errors.email.message}</div>}
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'password must have at least 8 chars',
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <div>{errors.password.message}</div>}
        <button type="submit">Login</button>
      </form>
      <button onClick={signInWithGithub}>LOGIN WITH GITHUB</button>
    </>
  );
}

export default Login;
