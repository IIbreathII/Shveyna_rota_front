import "./Alert.css";

export default function Alert({ message, onClose }) {
  return (
    <div className="alert-block">
      <div className="alert-content">
        <span className="alert-icon">✔</span>
        <span className="alert-message">{message}</span>
        <button className="alert-close" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}