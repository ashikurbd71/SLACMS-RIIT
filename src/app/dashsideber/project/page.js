"use client"; // Ensure this component is treated as a client component

import { useFormik } from "formik";
import Link from "next/link";
import Select from 'react-select'
import { useRouter } from "next/navigation";
export default function ProjectInfo() {

    
    
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
    // Programming Languages
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Go', label: 'Go' },
    { value: 'Swift', label: 'Swift' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Kotlin', label: 'Kotlin' },
  
    // Libraries
    { value: 'React', label: 'React' },
    { value: 'Lodash', label: 'Lodash' },
    { value: 'jQuery', label: 'jQuery' },
    { value: 'NumPy', label: 'NumPy' },
    { value: 'Pandas', label: 'Pandas' },
    { value: 'TensorFlow', label: 'TensorFlow' },
    { value: 'Django', label: 'Django' },
    { value: 'Flask', label: 'Flask' },
    { value: 'Spring Boot', label: 'Spring Boot' },
    { value: 'Express.js', label: 'Express.js' },
  
    // Frameworks
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Bootstrap', label: 'Bootstrap' },
    { value: 'Tailwind CSS', label: 'Tailwind CSS' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'Ruby on Rails', label: 'Ruby on Rails' },
    { value: 'ASP.NET', label: 'ASP.NET' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Flutter', label: 'Flutter' },
    { value: 'Electron', label: 'Electron' },
  
    // Databases
    { value: 'MySQL', label: 'MySQL' },
    { value: 'PostgreSQL', label: 'PostgreSQL' },
    { value: 'SQLite', label: 'SQLite' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Oracle', label: 'Oracle' },
    { value: 'Microsoft SQL Server', label: 'Microsoft SQL Server' },
    { value: 'Redis', label: 'Redis' },
    { value: 'MariaDB', label: 'MariaDB' },
    { value: 'Cassandra', label: 'Cassandra' },
    { value: 'Elasticsearch', label: 'Elasticsearch' },
    { value: 'Firebase Realtime Database', label: 'Firebase Realtime Database' },
    { value: 'Amazon DynamoDB', label: 'Amazon DynamoDB' },
  
    // Server-Side Languages
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C#', label: 'C#' },
    { value: 'Go', label: 'Go' },
    { value: 'Perl', label: 'Perl' },
    { value: 'ASP.NET', label: 'ASP.NET' },
    { value: 'Kotlin', label: 'Kotlin' },
  
    // IDEs and Editors
    { value: 'Visual Studio Code', label: 'Visual Studio Code' },
    { value: 'Sublime Text', label: 'Sublime Text' },
    { value: 'Atom', label: 'Atom' },
    { value: 'Eclipse', label: 'Eclipse' },
    { value: 'IntelliJ IDEA', label: 'IntelliJ IDEA' },
    { value: 'NetBeans', label: 'NetBeans' },
    { value: 'Xcode', label: 'Xcode' },
    { value: 'PyCharm', label: 'PyCharm' },
    { value: 'WebStorm', label: 'WebStorm' },
    { value: 'Brackets', label: 'Brackets' },
    { value: 'Notepad++', label: 'Notepad++' },
    { value: 'Jupyter Notebook', label: 'Jupyter Notebook' },
    
    // Version Control and CI/CD
    { value: 'Git', label: 'Git' },
    { value: 'GitHub', label: 'GitHub' },
    { value: 'GitLab', label: 'GitLab' },
    { value: 'Bitbucket', label: 'Bitbucket' },
    { value: 'Docker', label: 'Docker' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'Postman', label: 'Postman' },
    { value: 'Swagger', label: 'Swagger' },
    { value: 'Jenkins', label: 'Jenkins' },
    { value: 'Travis CI', label: 'Travis CI' },
    { value: 'Maven', label: 'Maven' },
    { value: 'Gradle', label: 'Gradle' },
    { value: 'Ant', label: 'Ant' },
    { value: 'Webpack', label: 'Webpack' },
    { value: 'Babel', label: 'Babel' },
    { value: 'ESLint', label: 'ESLint' },
    { value: 'Prettier', label: 'Prettier' },
    { value: 'Redux', label: 'Redux' },
    
    // CSS Component Libraries
    { value: 'Ant Design', label: 'Ant Design' },
    { value: 'Material-UI', label: 'Material-UI' },
    { value: 'Semantic UI', label: 'Semantic UI' },
    { value: 'Bulma', label: 'Bulma' },
    { value: 'Chakra UI', label: 'Chakra UI' },
    { value: 'Foundation', label: 'Foundation' },
    { value: 'PrimeReact', label: 'PrimeReact' },
    { value: 'Blueprint', label: 'Blueprint' },
    { value: 'Evergreen', label: 'Evergreen' },
    { value: 'Grommet', label: 'Grommet' },
    { value: 'Onsen UI', label: 'Onsen UI' },
    { value: 'Quasar', label: 'Quasar' },
    { value: 'Vuetify', label: 'Vuetify' },
    
    // Design Tools
    { value: 'Figma', label: 'Figma' },
    { value: 'Sketch', label: 'Sketch' },
    { value: 'Adobe XD', label: 'Adobe XD' }
];

  

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

  <h1 className="font-bold text-3xl">Recent, Featured, and Completed Work Showcasing <br/> Our Skill and Creative Solutions</h1>
  <p className="font-normal text-gray-500 pt-2 text-lg">We suggest including an real-world solutions and achievements</p>
      </div>
      <div className="mb-10">
        <div clasName="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">


<div>

    <h1 className="font-bold text-xl pb-10 text-[#12284c]">Project - 1</h1>

<div className="grid grid-cols-2 gap-5">
           <div>
              <label htmlFor="projectname" className="block text-sm font-semibold text-gray-900">
                Project Name
              </label>
              <input
                id="projectname"
                name="projectname"
                type="text"
           
                 placeholder="e.g Student Managesment System"
                onChange={formik.handleChange}
                value={formik.values.projectname}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="live" className="block text-sm font-semibold text-gray-900">
              LIve Link
              </label>
              <input
                id="live"
                name="live"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.live}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>


            <div>
              <label htmlFor="fontrepo" className="block text-sm font-semibold text-gray-900">
              Frontend Repo Link
              </label>
              <input
                id="fontrepo"
                name="fontrepo"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.fontrepo}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
<div>
            <label htmlFor="backrepo" className="block text-sm font-semibold text-gray-900">
              Backend Repo Link
              </label>
              <input
                id="backrepo"
                name="backrepo"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.backrepo}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           </div>
          
          <div className="grid grid-cols-1 pt-5 gap-5">
            
          <div>
              <label htmlFor="projectdiscrip" className="block text-sm font-semibold text-gray-900">
              Project Discription
              </label>
              <textarea

                row={8}
                id="projectdiscrip"
                name="projectdiscrip"
                type="text"
                  placeholder="e.g.  Project Details"
                onChange={formik.handleChange}
                value={formik.values.projectdiscrip}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
         
            <div className="flex flex-col">
           <label htmlFor="technology" className="block text-sm pb-1 font-semibold text-gray-900">
              
               Utilized Technologies
        
              </label>
              <Select
              placeholder="Select your utilized technologies:"
                id="technology"
                name="technology"
                isMulti
                styles={customStyles}
                className="text-[#726f6f]"
                options={options}
                onChange={(option) => formik.setFieldValue("technology", option.value)}
                onBlur={formik.handleBlur}
                value={options.find(option => option.value === formik.values.technology)}
              />
             
             
            </div>

            <label htmlFor="technology" className="block text-sm -mb-10 font-semibold text-gray-900">
              
             Key Attributes
       
             </label>

             <input
                id="feature1"
                name="feature1"
                type="text"
                  placeholder="e.g key feature-1"
                onChange={formik.handleChange}
                value={formik.values.feature1}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
               <input
                id="feature2"
                name="feature2"
                type="text"
                  placeholder="e.g key feature-2"
                onChange={formik.handleChange}
                value={formik.values.feature2}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
               <input
                id="feature3"
                name="feature3"
                type="text"
                   placeholder="e.g key feature-3"
                onChange={formik.handleChange}
                value={formik.values.feature3}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />

          </div>




</div>




<div>

    <h1 className="font-bold text-xl py-10 text-[#12284c]">Project - 2</h1>

<div className="grid grid-cols-2 gap-5">
           <div>
              <label htmlFor="projectname" className="block text-sm font-semibold text-gray-900">
                Project Name
              </label>
              <input
                id="projectname"
                name="projectname"
                type="text"
           
                 placeholder="e.g Student Managesment System"
                onChange={formik.handleChange}
                value={formik.values.projectname}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="live" className="block text-sm font-semibold text-gray-900">
              LIve Link
              </label>
              <input
                id="live"
                name="live"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.live}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>


            <div>
              <label htmlFor="fontrepo" className="block text-sm font-semibold text-gray-900">
              Frontend Repo Link
              </label>
              <input
                id="fontrepo"
                name="fontrepo"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.fontrepo}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
<div>
            <label htmlFor="backrepo" className="block text-sm font-semibold text-gray-900">
              Backend Repo Link
              </label>
              <input
                id="backrepo"
                name="backrepo"
                type="text"
                  placeholder="e.g https//"
                onChange={formik.handleChange}
                value={formik.values.backrepo}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
           </div>
          
          <div className="grid grid-cols-1 pt-5 gap-5">
            
          <div>
              <label htmlFor="projectdiscrip" className="block text-sm font-semibold text-gray-900">
              Project Discription
              </label>
              <textarea

                row={8}
                id="projectdiscrip"
                name="projectdiscrip"
                type="text"
                  placeholder="e.g.  Project Details"
                onChange={formik.handleChange}
                value={formik.values.projectdiscrip}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
         
            <div className="flex flex-col">
           <label htmlFor="technology" className="block text-sm pb-1 font-semibold text-gray-900">
              
               Utilized Technologies
        
              </label>
              <Select
              placeholder="Select your utilized technologies:"
                id="technology"
                name="technology"
                isMulti
                styles={customStyles}
                className="text-[#726f6f]"
                options={options}
                onChange={(option) => formik.setFieldValue("technology", option.value)}
                onBlur={formik.handleBlur}
                value={options.find(option => option.value === formik.values.technology)}
              />
             
             
            </div>

            <label htmlFor="technology" className="block text-sm -mb-10 font-semibold text-gray-900">
              
             Key Attributes
       
             </label>

             <input
                id="feature1"
                name="feature1"
                type="text"
                  placeholder="e.g key feature-1"
                onChange={formik.handleChange}
                value={formik.values.feature1}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
               <input
                id="feature2"
                name="feature2"
                type="text"
                  placeholder="e.g key feature-2"
                onChange={formik.handleChange}
                value={formik.values.feature2}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
               <input
                id="feature3"
                name="feature3"
                type="text"
                   placeholder="e.g key feature-3"
                onChange={formik.handleChange}
                value={formik.values.feature3}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />

          </div>




</div>


          
<div className="flex pt-5 justify-between">

<div></div>

<div className ="flex gap-5 items-center">


<Link href="/dashsideber/skill">
<div

className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500"
>
Preview : Skill
</div>

</Link>

 <Link href="/dashsideber/langues">
 <button
     type="submit"
     className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
   >
     Next : Langues
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
