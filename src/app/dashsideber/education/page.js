"use client"; // Ensure this component is treated as a client component

import { useFormik } from "formik";
import Link from "next/link";
import Select from 'react-select'
import { useRouter } from "next/navigation";
export default function EducationInfo() {

    const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #9CA3AF",
      borderRadius: "0.30rem",
      padding: "0.2rem",
      width: "100%",
      boxShadow: state.isFocused ? "0 0 0 1px #12284C" : "none",
      "&:hover": {
        // borderColor: "#12284C",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#12284C" : "#fff",
      color: state.isSelected ? "#fff" : "#726f6f",
      "&:hover": {
        backgroundColor: "#12284C",
        color: "#fff",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#726f6f",
    }),
    menu: (provided) => ({
      ...provided,
      border: "1px solid #12284C",
      borderRadius: "0.30rem",
    }),
  };

  const options = [
    { value: 'Diploma In Computer Science', label: 'Diploma In Computer Science' },
    { value: 'Diploma In Computer Civil', label: 'Diploma In Computer Civil' },

  ]

  return (
    <div className="w-full   mb-5 mx-auto">
       <button
        onClick={() => router.back()}
        className="flex items-center space-x-1 text-[#12284c] font-bold hover:text-blue-700 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back</span>
      </button>
      <div className="py-6">

  <h1 className="font-bold text-3xl">Tell us about your education</h1>
  <p className="font-normal text-gray-500 pt-2 text-lg">Enter your education experience so far, even if you are a current student or did not graduate.</p>
      </div>
      <div className="mb-10">
        <div clasName="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
           <div className="grid grid-cols-2 gap-5">
           <div>
              <label htmlFor="institute" className="block text-sm font-semibold text-gray-900">
                Institute Name
              </label>
              <input
                id="institute"
                name="institute"
                type="text"
           
                 placeholder="e.g Rangpur Ideal Institute Of Technology"
                onChange={formik.handleChange}
                value={formik.values.institute}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-900">
              Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                  placeholder="e.g. Rangpur , Bangladesh"
                onChange={formik.handleChange}
                value={formik.values.location}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

             {/* Cost */}
          
           </div>
           <div className="flex flex-col">
           <label htmlFor="prosasion" className="block text-sm pb-1 font-semibold text-gray-900">
              
             Degree
              </label>
              <Select
              placeholder="Select Degree"
                id="degree"
                name="degree"
                styles={customStyles}
                className="text-[#726f6f]"
                options={options}
                onChange={(option) => formik.setFieldValue("degree", option.value)}
                onBlur={formik.handleBlur}
                value={options.find(option => option.value === formik.values.degree)}
              />
             
             
            </div>

            <div className ="grid grid-cols-2 gap-5">

            <div>
              <label htmlFor="startdate" className="block text-sm font-semibold text-gray-900">
              Graduation Start Date
              </label>
              <input
                id="startdate"
                name="startdate"
                type="date"
                  placeholder="e.g. 17 Aguest 2023"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
      
            <div>
              <label htmlFor="enddate" className="block text-sm font-semibold text-gray-900">
              Graduation End Date
              </label>
              <input
                id="enddate"
                name="enddate"
                type="date"
                  placeholder="e.g. 17 Aguest 2027"
                onChange={formik.handleChange}
                value={formik.values.enddate}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

           
           
           
            </div>

           
            <div className="flex pt-5 justify-between">

<div></div>

<div className ="flex gap-5 items-center">


<Link href="/dashsideber/objective">
<div

className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500"
>
Preview : Objective
</div>

</Link>

 <Link href="/dashsideber/skill">
 <button
     type="submit"
     className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
   >
     Next : Skill
   </button>
 
 </Link>
</div>

  </div>
          </form>
        </div>
      </div>
    </div>
  );
}
