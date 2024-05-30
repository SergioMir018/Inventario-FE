import { useState, useEffect } from "react";
import UserPic from "./user-pic.tsx";
import { GitHubUser } from "../../types/http-types.ts";
import { Octokit } from "octokit";
import { createOAuthUserAuth } from "@octokit/auth-oauth-user";

export default function UserCard() {
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code') as string;

      const auth = createOAuthUserAuth({
        clientId: import.meta.env.VITE_CLIENT_ID,
        clientSecret: import.meta.env.VITE_CLIENT_SECRET,
        code: code,
      });

      const {token} = await auth();

      const octokit = new Octokit({
        auth: token
      })

      const data = await octokit.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((response) => {
        return response.data;
      })

      setUser(data);
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
