import { useState } from "react";
import toast from "react-hot-toast";

const useGetLastMessage = () => {
  const [GetLastMessageData, setGetLastMessageData] = useState([]);
  // @ts-ignore
  const API = import.meta.env.VITE_DB_URL;
  const GetLastMessage = async () => {

    try {
      const res = await fetch(`${API}/api/messages/latestMessages`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      setGetLastMessageData(data.lastmessage);

    } catch (error) {
      console.log(error);
    }

  }
  return { GetLastMessage, GetLastMessageData }
}

export default useGetLastMessage