import React from "react";

const FormInput = ({ label, id, type = "text", placeholder, register, errors }) => (
  <div className="col col-12">
    <label htmlFor={id} className="mt-4">
      {label} <span>*</span>
    </label>
    <input
      type={type}
      id={id}
      className="w-100 mt-2"
      placeholder={placeholder}
      {...register(id, { required: `${label} is required` })}
    />
    {errors[id] && <p className="error">{errors[id].message}</p>}
  </div>
);

export default FormInput;
