import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      department: user?.department || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string(),
      department: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        // TODO: Replace with real dispatch or API call
        // dispatch(updateUserProfile(values));
        toast.success("Profile updated successfully!");
      } catch (error) {
        toast.error("Failed to update profile");
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-700">Edit Profile</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600 text-sm">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
            {...formik.getFieldProps("phone")}
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            name="department"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
            {...formik.getFieldProps("department")}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
