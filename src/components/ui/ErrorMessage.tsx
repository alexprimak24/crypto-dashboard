interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="w-full text-center text-xl">
      <span role="img">🔴</span>
      {message}
    </p>
  );
}
