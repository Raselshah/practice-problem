import React from "react";
import { toast } from "react-toastify";

const AllServiceLayout = ({ service }) => {
  const handleDeleteService = (id) => {
    console.log(id);
    const url = `http://localhost:5000/serviceDelete/${id}`;
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
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div class="card-actions justify-end">
          <button
            onClick={() => handleDeleteService(service._id)}
            class="btn btn-primary btn-xs"
          >
            Delete Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceLayout;
