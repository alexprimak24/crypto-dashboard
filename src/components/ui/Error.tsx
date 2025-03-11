import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  let errorMessage = 'An unexpected error occured.';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || error.statusText;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
