import "./Toast.css";

function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">{message}</div>
    </div>
  );
}

export default Toast;
