import { useEffect, useState } from "react";
import { BASE_API } from "../contants/api.constant";
import axios from "axios";

export function UseAuthMe() {
  const [userData, setUserData] = useState();
  async function verifyUser() {
    try {
      if (!window.localStorage.getItem("token")) return null;
      const response = await axios.get(`${BASE_API}/auth/me`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });

      setUserData(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return { userData };
}
