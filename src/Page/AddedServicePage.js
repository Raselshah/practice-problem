import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddedServicePage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://still-garden-01944.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (data) {
      toast.success("successfully added service");
    }
    console.log(data);
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center h-screen gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          className="input input-bordered input-primary w-full max-w-xs"
          {...register("name")}
        />
        <input
          placeholder="Description"
          className="input input-bordered input-primary w-full max-w-xs"
          {...register("description")}
        />

        <input className="btn btn-outline btn-secondary" type="submit" />
      </form>
    </div>
  );
};

export default AddedServicePage;
