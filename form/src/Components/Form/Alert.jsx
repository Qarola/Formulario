import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export const Alert = () => {
  return (
    <div className="alert__modal">
      <div className="alert__content">
        <h3>
          <FaRegCheckCircle size="35" color="#275DAD" /> Your information was
          sent successfully, we will be in contact with you!
        </h3>
      </div>
    </div>
  );
};
