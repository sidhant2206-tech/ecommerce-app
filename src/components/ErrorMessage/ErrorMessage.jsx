import "./ErrorMessage.css";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box">
      <p>⚠️ {message || "Kuch galat ho gaya"}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
}