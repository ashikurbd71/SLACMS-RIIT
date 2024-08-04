export default function Resume() {
    return (
      

        <div className="container mx-auto p-8 border-2 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Ashikur Rahman Ovi</h1>
        <h2 className="text-xl">Front-End Developer</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <span>📞 +880-1581782193</span>
          <span>✉️ ashikurovi2003@gmail.com</span>
          <span>📍 Rangpur, Bangladesh</span>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://ashikurrahmanovi.surge.sh" target="_blank" className="text-blue-500">Portfolio</a>
          <a href="https://www.linkedin.com/in/ashikur-ovi/" target="_blank" className="text-blue-500">LinkedIn</a>
          <a href="https://github.com/ashikurbd71" target="_blank" className="text-blue-500">GitHub</a>
        </div>
      </header>

      <section className="mb-8 ">
        <h3 className="text-2xl border-b-4 border-black  font-bold mb-4">SKILLS</h3>
        <div className="mb-4">
          <h4 className="font-semibold">EXPERTISE</h4>
          <p>HTML, CSS, Tailwind CSS, Bootstrap, Javascript, React JS</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">COMFORTABLE</h4>
          <p>Express JS, Node JS, MongoDB, JWT</p>
        </div>
        <div>
          <h4 className="font-semibold">TOOLS</h4>
          <p>Github, Vercel, Surge, Figma, Firebase</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold border-b-4 border-black  font-bold mb-4">PROJECTS</h3>
        <div className="mb-8">
          <h4 className="font-semibold text-lg">RUBY MEDICAL CAMP</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Demo</a>
            <a href="#" className="text-blue-500">Frontend Code</a>
            <a href="#" className="text-blue-500">Backend Code</a>
          </div>
          <p className="mt-2">
            This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps. Organizers can add new Camps from their dashboard. And he can manage them
          </p>
          <p className="mt-2"><strong>Utilized Technologies:</strong> Tailwind CSS | JavaScript | React JS | Node JS | Express JS | MongoDB | Firebase | Stripe | Jwt | MUI</p>
          <ul className="list-disc list-inside mt-2">
            <li>Secure payment integration using Stripe with payment history tracking.</li>
            <li>Organizer dashboard for managing camps, including add, update, and delete operations.</li>
            <li>Packing real-time data using the Tanstack query.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-lg">SQUARESPACE</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Demo</a>
            <a href="#" className="text-blue-500">Frontend Code</a>
            <a href="#" className="text-blue-500">Backend Code</a>
          </div>
          <p className="mt-2">
            This is a blog website. Here the user can read the blogs. Available Blogs can be viewed in Available Blog Station and can be sorted and filtered according to the name of the blog as desired. And user can update and manage blogs post by visiting his dashboard
          </p>
          <p className="mt-2"><strong>Utilized Technologies:</strong> Tailwind CSS | JavaScript | React JS | Node JS | Express JS | MongoDB | Firebase | Jwt</p>
          <ul className="list-disc list-inside mt-2">
            <li>User authentication and secure blog management with Firebase.</li>
            <li>Interactive blog features with React, displaying blogs in ascending order.</li>
            <li>Wish list functionality for users to save and manage blogs for later reading.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-lg">BRAND-SHOP</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Demo</a>
            <a href="#" className="text-blue-500">Frontend Code</a>
            <a href="#" className="text-blue-500">Backend Code</a>
          </div>
          <p className="mt-2">
            This is a Simple e-commerce website. Here the products of various brands have been shown. Different brands can add their products. And he can delete and update them later. Here user can buy products and add products to shopping cart.
          </p>
          <p className="mt-2"><strong>Utilized Technologies:</strong> Tailwind CSS | JavaScript | React JS | Node JS | Express JS | MongoDB | Firebase | Jwt</p>
          <ul className="list-disc list-inside mt-2">
            <li>Private Route and Firebase Authentication System</li>
            <li>Products Add, update And Deletion Of Various Categories</li>
            <li>Category Search Functionality</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b-4 border-black   mb-4">EDUCATION</h3>
        <div>
          <h4 className="font-semibold">Diploma in Computer Science and Technology</h4>
          <a href="#" className="text-blue-500">Rangpur Ideal Institute of Technology</a>
          <div className="flex space-x-2 mt-1">
            <span>📅 2023 - Present</span>
            <span>📍 Rangpur, Bangladesh</span>
          </div>
        </div>
      </section>
      <section className="mb-8  ">
        <h3 className="text-2xl font-bold border-b-4 border-black   mb-4">LANGUAGES</h3>
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
            <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
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
    
    );
}