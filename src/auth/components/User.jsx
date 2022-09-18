import React from "react";
import { useSelector } from "react-redux";
import { userEmailSelector } from "../store/authSelectors";

const User = () => {
  const email = useSelector(userEmailSelector);

  return (
    email && (
      <div>
        <h5>{email}</h5>
      </div>
    )
  );
};

export default User;