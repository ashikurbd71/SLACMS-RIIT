"use client"; // Ensure this component is treated as a client component

import { useFormik } from "formik";
import Link from "next/link";
// import { useStep } from "../setprovider/page";
import { useRouter } from "next/navigation";
import Select from 'react-select'
export default function Info() {
//   const { nextStep } = useStep();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      Surname: "",
      prosasion: "",
      city: "",
      country: "",
      phone: "",
      linkeind: "",
      protfolio: "",
      github: "",
    },
    onSubmit: (values) => {
      console.log(values);
    //   nextStep();
      router.push('/steps/2');
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

  const diplomaSubjects = [
    { value: 'civil_engineering', label: 'Civil Engineering' },
    { value: 'computer_technology', label: 'Computer Technology' },
    { value: 'electrical_technology', label: 'Electrical Technology' },
    { value: 'mechanical_technology', label: 'Mechanical Technology' },
    { value: 'automobile_technology', label: 'Automobile Technology' },
    { value: 'architecture_and_interior_design', label: 'Architecture And Interior Design' },
    { value: 'telecommunication_technology', label: 'Telecommunication Technology' },
    { value: 'textile_technology', label: 'Textile Technology' },
    { value: 'environmental_technology', label: 'Environmental Technology' },
    { value: 'surveying', label: 'Surveying' },
    { value: 'food_technology', label: 'Food Technology' },
    { value: 'chemical_technology', label: 'Chemical Technology' },
    { value: 'marine_technology', label: 'Marine Technology' }
  ];
  


  return (
    <div className="w-full   mb-5 mx-auto">
     <Link href="/">
     <button
    
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
     </Link>
      <div className="py-6">

  <h1 className="font-bold text-3xl">Display Key Details and Data Insights in a User-Friendly <br/> Component Interface?</h1>
  <p className="font-normal text-gray-500 pt-2 text-lg">We suggest including your institute name and location .</p>
      </div>
      <div className="mb-10">
        <div clasName="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
           <div className="grid grid-cols-2 gap-5">
           <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                Institute Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
           
                 placeholder="e.g Rangpur Ideal Institute Of Technology"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="Surname" className="block text-sm font-semibold text-gray-900">
              Location
              </label>
              <input
                id="loaction"
                name="loaction"
                type="text"
                  placeholder="e.g Central,Road,Rangpur"
                onChange={formik.handleChange}
                value={formik.values.loaction}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           </div>
        
            <div className ="grid grid-cols-2 gap-5">

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-900">
               Institute Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                  placeholder="e.g. 16100"
                onChange={formik.handleChange}
                value={formik.values.code}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
      

           
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-900">
              Class Start Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                  placeholder="e.g. Bnagladesh"
                onChange={formik.handleChange}
                value={formik.values.date}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            
            <div className="flex flex-col">
           <label htmlFor="tech" className="block text-sm pb-1 font-semibold text-gray-900">
              
             Technology
        
              </label>
              <Select
              placeholder="Select Subject"
                id="tech"
                name="tech"
                styles={customStyles}
                className="text-[#726f6f]"
                options={diplomaSubjects}
                onChange={(diplomaSubjects) => formik.setFieldValue("tech", diplomaSubjects.value)}
                onBlur={formik.handleBlur}
                value={diplomaSubjects.find(diplomaSubjects => diplomaSubjects.value === formik.values.tech)}
              />
             
             
            </div>
           
           
    
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Semester
              </label>
              <input
                id="semester"
                name="semester"
                type="text"
                  placeholder="e.g. 4th"
                onChange={formik.handleChange}
                value={formik.values.semester}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           
            



          



            </div>
        
           <div className="flex pt-5 justify-between">

            <div></div>
          <Link  href="/routinedash/routinetime"> 
          <button
              type="submit"
              className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
            >
              Next : Time & Period
            </button>
            </Link>

           </div>
          </form>
        </div>
      </div>
    </div>
  );
}
