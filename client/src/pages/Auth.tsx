import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setStoredToken } from "../stores/tokens";
import { useTokens } from "../stores/selectors";
import { useEffect, useState } from "react";
import storageService from "../services/storage-service";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  name: string;
}

export const AuthPage = () => {
  const dispatch = useDispatch();
  const userToken = useTokens();
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const request = await fetch("https://sparely-server-sparely.apps.cluster-9kktz.gcp.redhatworkshops.io/users/profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      const response = (await request.json()) as IUser;

      setUserInfo(response);
    };

    if (userToken) {
      fetchUserInfo();
    }
  }, [userToken]);

  return (
    <>
      {userToken ? (
        <>
          {userInfo ? (
            <>
              <div>
                <img src={userInfo.picture} alt="user" />
                <div>{userInfo.name}</div>
                <div>{userInfo.email}</div>
              </div>
              <button onClick={() => dispatch(setStoredToken(null))}>
                Logout
              </button>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            dispatch(setStoredToken(credentialResponse.credential as string));
            storageService.saveIdToken(credentialResponse.credential as string);
            navigate('/dashboard')
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      )}
    </>
  );
};
