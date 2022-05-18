import React from "react";
import { toast } from "react-toastify";

const AllServiceLayout = ({ service }) => {
  const handleDeleteService = (id) => {
    console.log(id);
    const url = `https://still-garden-01944.herokuapp.com/serviceDelete/${id}`;
    const proceed = window.confirm("Are you sure delete this one");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("delete successful");
          } else {
            toast.error("field to deleting");
          }
        });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDeleteService(service._id)}
            className="btn btn-primary btn-xs"
          >
            Delete Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceLayout;
