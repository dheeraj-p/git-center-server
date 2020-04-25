import ToastStyles from './Toast.style';

export default function Toast({ message, isVisible, onClose }) {
  const display = isVisible ? 'visible' : 'hidden';
  if (isVisible) setTimeout(onClose, 3000);

  return (
    <div className={`d-flex justify-content-center toast-container ${display}`}>
      <span className="toast-message text-light">{message}</span>
      <style jsx>{ToastStyles}</style>
    </div>
  );
}
