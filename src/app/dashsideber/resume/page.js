import { FaDownload } from "react-icons/fa";

export default function Resume() {
    return (
      

     <>
     
     <div className="flex justify-between items-center">

    <div className="font-semibold text-lg">Hello,<span className="text-md font-bold text-[#12284C]"> Ashikur Rahman Ovi</span></div>
    
    <button className='bg-[#12284C] mb-10 font-semibold text-white flex items-center gap-1 rounded-md px-3 py-2'>
        <FaDownload />
       <h1> Download</h1>

    </button>

     </div>
     
     
     <div className="container mx-auto p-8 border-2 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold">Ashikur Rahman Ovi</h1>
        <h2 className="text-xl font-bold text-blue-500">Front-End Developer</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <span className=" font-semibold">📞 +880-1581782193</span>
          <span className=" font-semibold">✉️ ashikurovi2003@gmail.com</span>
          <span className=" font-semibold">📍 Rangpur, Bangladesh</span>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://ashikurrahmanovi.surge.sh" target="_blank" className="text-blue-500 font-semibold">Portfolio</a>
          <a href="https://www.linkedin.com/in/ashikur-ovi/" target="_blank" className="text-blue-500 font-semibold">LinkedIn</a>
          <a href="https://github.com/ashikurbd71" target="_blank" className="text-blue-500 font-semibold">GitHub</a>
        </div>
      </header>

      <section>
        <h3 className="text-2xl  border-b-4 border-black   font-extrabold mb-4">SUMMARY</h3>
        <div className="mb-8">

      
          <p className="mt-2">
            This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps. Organizers can add new Camps from their dashboard. And he can manage them
          </p>
        
        </div>


     
      </section>


      <section className="mb-8 ">
        <h3 className="text-2xl border-b-4 border-black  font-extrabold mb-4">SKILLS</h3>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-500 ">EXPERTISE</h4>
         <div className="mt-3">

        <div className="flex items-center gap-3">
        <p className="border-b-2 border-gray-400 text-center font-bold text-gray-700">  HTML </p>
        <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  CSS </p>
           <p className="border-b-2 border-gray-400 ext-center font-bold text-gray-700">  Tailwind CSS </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Bootstrap </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Javscript </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  React JS </p>
        </div>
         <p className="border-b-4 pt-2 border-dotted"></p>
         </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-500 ">COMFORTABLE</h4>
          <div className="mt-3">
          <div className="flex items-center gap-3">
        <p className="border-b-2 border-gray-400 text-center font-bold text-gray-700">  Express JS </p>
        <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Nest js </p>
           <p className="border-b-2 border-gray-400 ext-center font-bold text-gray-700">  Node JS </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  MongoDB </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  PostgreSQL </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  JWT </p>
        </div>
        <p className="border-b-4 pt-2 border-dotted"></p>
</div>
        </div>
        <div>
          <h4 className="font-semibold text-blue-500 ">TOOLS</h4>
          <div className="mt-3">
          <div className="flex items-center gap-3">
        <p className="border-b-2 border-gray-400 text-center font-bold text-gray-700">  Github </p>
        <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Varcel </p>
           <p className="border-b-2 border-gray-400 ext-center font-bold text-gray-700">  Surge </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Figma </p>
              <p className="border-b-2 border-gray-400  text-center font-bold text-gray-700">  Firebase </p>
      
        </div>

</div>
         
        </div>
      </section>

      <section>
        <h3 className="text-2xl  border-b-4 border-black   font-extrabold mb-4">PROJECTS</h3>
        <div className="mb-8">
          <h4 className="font-bold text-lg">RUBY MEDICAL CAMP</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Demo</a>
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Frontend Code</a>
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Backend Code</a>
          </div>
          <p className="mt-2">
            This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps. Organizers can add new Camps from their dashboard. And he can manage them
          </p>
          <div className="flex items-center mt-2 gap-2">
          <div className="font-semibold">Utilized Technologies :</div> 
            <div className="flex items-center gap-2"><h1>Tailwind CSS |</h1><h1>Javascript |</h1><h1>React JS |</h1><h1>MongoDB</h1></div>

          </div>
          <ul className="list-disc list-inside mt-2">
            <li>Secure payment integration using Stripe with payment history tracking.</li>
            <li>Organizer dashboard for managing camps, including add, update, and delete operations.</li>
            <li>Packing real-time data using the Tanstack query.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-bold text-lg">SQUARESPACE</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Demo</a>
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Frontend Code</a>
            <a href="#" className="text-blue-500 border-b-2 font-semibold border-blue-500">Backend Code</a>
          </div>
          <p className="mt-2">
            This is a blog website. Here the user can read the blogs. Available Blogs can be viewed in Available Blog Station and can be sorted and filtered according to the name of the blog as desired. And user can update and manage blogs post by visiting his dashboard
          </p>
         
          <div className="flex items-center mt-2 gap-2">
          <div className="font-semibold">Utilized Technologies :</div> 
            <div className="flex items-center gap-2"><h1>Tailwind CSS |</h1><h1>Javascript |</h1><h1>React JS |</h1><h1>MongoDB</h1></div>

          </div>
          <ul className="list-disc list-inside mt-2">
            <li>User authentication and secure blog management with Firebase.</li>
            <li>Interactive blog features with React, displaying blogs in ascending order.</li>
            <li>Wish list functionality for users to save and manage blogs for later reading.</li>
          </ul>
        </div>

     
      </section>

      <section className="mb-8">
        <h3 className="text-2xl  font-extrabold border-b-4 border-black   mb-4">EDUCATION</h3>
        <div>
          <h4 className="font-semibold text-lg">Diploma in Computer Science and Technology</h4>
          <a href="#" className="text-blue-500 font-bold">Rangpur Ideal Institute of Technology</a>
          <div className="flex font-medium text-gray-700 space-x-2 mt-1">
            <span>📅 2023 - Present</span>
            <span>📍 Rangpur, Bangladesh</span>
          </div>
        </div>
      </section>
      <section className="mb-8  ">
        <h3 className="text-2xl  font-extrabold border-b-4 border-black   mb-4">LANGUAGES</h3>
        <div className=" grid gap-5 -ml-[24px] grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-28 justify-between">
                <h1 className=" font-semibold">Bangla</h1>
            <h1 className=" text-sm">Native</h1>
            </div>
            <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-24 justify-between">
                <span className="font-semibold">English</span>
            <span className=" text-sm">Advance</span>
            </div>
            <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4npm run dev">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-28 justify-between">
                <span className=" font-semibold">Hindi</span>
            <span className="text-sm">Beginer</span>
            </div>
            <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
     
     </>
    
    );
}