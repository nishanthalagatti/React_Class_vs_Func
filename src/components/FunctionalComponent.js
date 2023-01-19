import { useEffect, useState } from "react";
import axios from "axios";

function FunctionalComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setData(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log("Data has been updated");
  }, [data]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.first_name}</div>
      ))}
    </div>
  );
}

export default FunctionalComponent;
