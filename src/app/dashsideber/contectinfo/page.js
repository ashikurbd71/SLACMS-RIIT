"use client"; // Ensure this component is treated as a client component

import { useFormik } from "formik";
import Link from "next/link";
import { useStep } from "../setprovider/page";
import { useRouter } from "next/navigation";

export default function ContecInfo() {
  const { nextStep } = useStep();
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
      nextStep();
      router.push('/steps/2');
    },
  });



  return (
    <div className="w-full   mb-5 mx-auto">
     <Link href="/createcv">
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

  <h1 className="font-bold text-3xl">What’s the best way for employers to <br/> contact you?</h1>
  <p className="font-normal text-gray-500 pt-2 text-lg">We suggest including an email and phone number.</p>
      </div>
      <div className="mb-10">
        <div clasName="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
           <div className="grid grid-cols-2 gap-5">
           <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                Frist Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
           
                 placeholder="e.g Ashikur"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="Surname" className="block text-sm font-semibold text-gray-900">
              Surname
              </label>
              <input
                id="Surname"
                name="Surname"
                type="text"
                  placeholder="e.g Ovi"
                onChange={formik.handleChange}
                value={formik.values.Surname}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           </div>
           <div>
              <label htmlFor="prosasion" className="block text-sm font-semibold text-gray-900">
              Profession
              </label>
              <input
                id="prosasion"
                name="prosasion"
                type="text"
                  placeholder="e.g. Software Engineer"
                onChange={formik.handleChange}
                value={formik.values.prosasion}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className ="grid grid-cols-2 gap-5">

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-900">
              City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                  placeholder="e.g. Rangpur"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
      

           
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-gray-900">
              Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                  placeholder="e.g. Bnagladesh"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           
            </div>

            <div className="grid gap-5 grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                  placeholder="e.g. +880 01581782193"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                  placeholder="e.g. ashikurovi2003@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="linkeind" className="block text-sm font-semibold text-gray-900">
              Linkeind
              </label>
              <input
                id="linkeind"
                name="linkeind"
                type="text"
                  placeholder="e.g. https//"
                onChange={formik.handleChange}
                value={formik.values.linkeind}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="protfolio" className="block text-sm font-semibold text-gray-900">
            Protfolio
              </label>
              <input
                id="protfolio"
                name="protfolio"
                type="text"
                  placeholder="e.g. https//"
                onChange={formik.handleChange}
                value={formik.values.protfolio}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="github" className="block text-sm font-semibold text-gray-900">
              Github
              </label>
              <input
                id="github"
                name="github"
                type="text"
                  placeholder="e.g. https//"
                onChange={formik.handleChange}
                value={formik.values.github}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>



            </div>
        
           <div className="flex pt-5 justify-between">

            <div></div>
          <Link href="/dashsideber/objective"> 
          <button
              type="submit"
              className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
            >
              Next : Objective
            </button>
            </Link>

           </div>
          </form>
        </div>
      </div>
    </div>
  );
}
