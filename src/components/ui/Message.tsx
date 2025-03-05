interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps) {
  return (
    <p className="w-screen text-center text-xl">
      <span role="img">👋</span>
      {message}
    </p>
  );
}

export default Message;
