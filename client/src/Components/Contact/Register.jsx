import React from "react";
import './Contact.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import FormInput from "./FormInput";
import FormInput2 from "./FormInput2";
import FormTextarea from "./FormTextarea";

import MobileInput from "./MobileInput";

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const response = await fetch('http://localhost:5000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          reset();
      } else {
          const errorData = await response.json();
          Swal.fire({
            title: 'Error!',
            text: `Submission failed: ${errorData.message || 'Unknown error'}`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
      }
      } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
    }
  };

  return (
    <div className="register training p-3" id="register">
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="container-fluid p-3">
          <div className="row">
            <FormInput label="Name" id="name" placeholder="Enter name" register={register} errors={errors} />
            <MobileInput register={register} errors={errors} />
            <FormInput2 label="Email" id="email" placeholder="Enter email" type="email" register={register} errors={errors} />     
            <FormInput2 label="City" id="city" placeholder="Enter city" register={register} errors={errors} />
            <FormInput2 label="Pincode" id="pincode" placeholder="Enter pincode" register={register} errors={errors} />
            <FormTextarea label="Message" id="message" placeholder="Enter message" register={register} errors={errors} />

          <div className="col col-6 mt-3 w-100">
            <p className="terms">By clicking submit, I agree to the <span><u>Terms and Conditions & Privacy Policy</u></span></p>
          </div>

          <div className="col col-6 mb-5 mt-3 w-100">
            <button type="submit" className="w-100 text-center p-3 submit">Send Enquiry</button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
