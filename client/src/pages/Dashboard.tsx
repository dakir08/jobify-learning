import { FunctionComponent, useEffect } from "react";

export const Dashboard: FunctionComponent = () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
