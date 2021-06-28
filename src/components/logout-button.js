import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        //https://auth0.com/blog/complete-guide-to-react-user-authentication/: Here, you pass the returnTo option to specify the URL where Auth0 should redirect your users after they logout. if you were to deploy your React application to production, you need to add the production logout URL to the "Allowed Logout URLs" list and ensure that Auth0 redirects your users to that production URL and not localhost. Setting returnTo to window.location.origin will do just that.
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
