import { useState, useEffect } from "react";
import UserPic from "./user-pic.tsx";
import { GitHubUser } from "../../types/http-types.ts";

export default function UserCard() {
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              client_id: import.meta.env.VITE_CLIENT_ID,
              client_secret: import.meta.env.VITE_CLIENT_SECRET,
              code: code,
            }),
          });

          if (!response.ok) {
            throw new Error(`Error al obtener el token de acceso: ${response.statusText}`);
          }

          const data = await response.json();
          const accessToken = data.access_token;

          console.log(accessToken);

          const userResponse = await fetch("https://api.github.com/user", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!userResponse.ok) {
            throw new Error(`Error al obtener los datos del usuario: ${userResponse.statusText}`);
          }

          const userData = await userResponse.json();
          setUser(userData);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center">
      <UserPic imageUrl={user?.avatar_url} />
      <h4 className="ml-6 font-gabarito-medium text-lg">
        {user ? user.name : "User name"}
      </h4>
    </div>
  );
}
