import React, { useState } from "react";
import "./styles.css";
import { Modal } from "./components/Modal/Modal";
import { Toast } from "./components/Toast/Toast";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const modalHandler = () => setShowModal(!showModal);
  const toastHandler = () => setShowToast(!showToast);

  const renderContent = () => (
    <div>
      <h2>Are you sure want to cancel?</h2>
      <div className="flex">
        <button className="no-btn" onClick={modalHandler}>
          yes
        </button>
        <button>no</button>
      </div>
    </div>
  );

  const renderToastContent = () => <div>Toast is successful</div>;

  return (
    <div className="App">
      <h1>Modal and Toast</h1>
      <div className="align-button">
        <button onClick={modalHandler}>show modal</button>
        <button onClick={toastHandler}>show toast</button>
      </div>
      <Modal
        showModal={showModal}
        onClick={modalHandler}
        renderContent={renderContent}
      />
      <Toast
        showToast={showToast}
        setShowToast={() => setShowToast(false)}
        renderContent={renderToastContent}
        onClick={toastHandler}
      />
    </div>
  );
}
