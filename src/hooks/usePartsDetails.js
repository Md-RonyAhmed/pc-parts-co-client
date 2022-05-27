import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const usePartsDetails = (id) => {
  const [parts, setParts] = useState([]);
  const url = `http://localhost:5000/parts/${id}`;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      if (!data?.success) {
        setParts([]);
        return toast.error(data.error);
      }
      setParts(data?.data);
    })();
  }, [id, url]);
  return [parts[0]];
};
