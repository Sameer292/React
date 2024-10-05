import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-center mt-5" >Please login</div>;
  return <div className="text-center mt-5">Welcome {user.Username}</div>;
}

export default Profile;