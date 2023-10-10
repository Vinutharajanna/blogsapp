import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
