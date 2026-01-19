import React, { useEffect, useState } from "react";
import { getTestData } from "../api/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTestData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.message}</h1>
      <ul>
        {data.numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
