import React, { useEffect, useState } from "react";
import AllServiceLayout from "./AllServiceLayout";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-2xl text-indigo-500 text-center">
        Total Service : {services.length}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AllServiceLayout key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
