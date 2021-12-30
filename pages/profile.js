import { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { GoogleLogout } from "react-google-login";

const profile = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [name, setName] = useState("");
  const [imga, setImga] = useState("");

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    setName(response.profileObj.name);
    setImga(response.profileObj.imageUrl);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };
  const logout = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  return (
    <div>
      <h1 className="text-center text-lg   bg-indigo-500 font-bold">
        Welcome In Login Page
      </h1>
      <div className="flex justify-center items-center mt-4">
        <img src={imga} alt="" />
      </div>

      <h1 className="text-center text-lg  text-indigo-500 font-bold ">{name}</h1>
      <div className="text-center mt-4">
        {showloginButton ? (
          <GoogleLogin
            clientId="254344474027-lptdqstetr32fgavoh3u3cg98ndccei2.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId=" 254344474027-lptdqstetr32fgavoh3u3cg98ndccei2.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
};

export default profile;
