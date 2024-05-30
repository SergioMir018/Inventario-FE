import { useState, useEffect } from "react";
import UserPic from "./user-pic.tsx";
import { GitHubUser } from "../../types/http-types.ts";

export default function UserCard() {
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('code');

      console.log(token);


      if (token) {
        try {
          const response = await fetch("https://api.github.com/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error al obtener los datos del usuario: ${response.statusText}`);
          }

          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
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
