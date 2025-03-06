import React, { useEffect, useState, useRef } from "react";
import "./Toast.css";
export const Toast = ({
  showToast,
  renderContent,
  onClick,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState(100);
  // useEffect(() => {
  //   if (showToast) {
  //     let timeout = setTimeout(() => {
  //       // onClick();
  //       clearTimeout(timeout);
  //     }, duration);
  //   }
  // }, [showToast]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!showToast) return;

    setProgress(100);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 1;
        if (newProgress <= 0) {
          clearInterval(intervalRef.current);
          onClick();
          return 0;
        } else return newProgress;
      });
    }, duration / 100);

    return () => clearInterval(intervalRef.current);
  }, [showToast, duration]);

  if (!showToast) return null;
  return (
    <div className="toast">
      <div className="action" onClick={onClick}>
        X
      </div>
      <div>{renderContent()}</div>
      <div className="toast-progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
