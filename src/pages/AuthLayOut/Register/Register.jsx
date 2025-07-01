import React, { useState } from "react";
import { useForm } from "react-hook-form";

import GoogleLogo from "../../shared/GoogleLogo";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { creatUser ,updateUserProfile} = useAuth();
  const [profilePic, setProfilePic] = useState("");

  const onSubmit = (data) => {
    // console.log(data);
    creatUser(data.email, data.password)
      .then(async (res) => {
        console.log(res);
        // update userinfo in the database
        const userinfo = {
          email: data.email,
          role: "user", // default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        console.log( userinfo )
         const userRes = await axios.post('http://localhost:3000/users', userinfo);
                console.log(userRes.data);
                

                // update user profile in firebase
                  const userProfile = {
                    displayName: data.name,
                    photoURL: profilePic
                }
                updateUserProfile(userProfile)
                    .then(() => {
                        console.log('profile name pic updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })

      })
      .catch((error) => {
        console.error(error);
      });
  };
  // update user profile in firebase
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    // uplod imgbb
    const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imagUploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.text?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
            {/* name field */}
            <label className="label">Your Name</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="input"
              placeholder="Your Profile picture"
            />

            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password must be 6 digith</p>
            )}

            <div>
              <p className="link link-hover">
                Already have an account?{" "}
                <Link to="/login" className="text-[#CAEB66]">
                  Login
                </Link>
              </p>
            </div>
            <button type="submit" className="btn bg-[#CAEB66] text-black mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <div class="divider">Or</div>
        <div className="">
          {/* Google */}
          <GoogleLogo></GoogleLogo>
        </div>
      </div>
    </div>
  );
};

export default Register;
