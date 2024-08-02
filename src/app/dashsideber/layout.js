"use client"; // Add this directive to ensure the component is treated as a client component

import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
export default function Layout({ children }) {
  const steps = [
    { number: 1, label: 'Heading' },
    { number: 2, label: 'Education' },
    { number: 3, label: 'Experience' },
    { number: 4, label: 'Skills' },
    { number: 5, label: 'Summary' },
    { number: 6, label: 'Finalize' },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-[#12284c] 2xl:col-span-2 min-h-screen">
        <div className="p-10 text-[#FFF] font-semibold">
          <div className=" text-white  h-full  px-4">
            <div className="text-xl font-bold mb-8">SLACMS</div>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center space-x-2 cursor-pointer ${currentStep === step.number ? 'text-blue-400' : 'text-gray-400'}`}
                  onClick={() => setCurrentStep(step.number)}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current">
                    {currentStep > step.number ? <FaCheckCircle className='text-blue-600'/> : step.number}
                  </span>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="text-sm mb-2">RESUME COMPLETENESS:</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
              </div>
              <div className="text-right">{Math.round((currentStep / steps.length) * 100)}%</div>
            </div>
            <div className="mt-auto text-sm space-y-2">
              <Link href="/terms" className="block">Terms and Conditions</Link>
              <Link href="/privacy" className="block">Privacy Policy</Link>
              <Link href="/accessibility" className="block">Accessibility</Link>
              <Link href="/contact" className="block">Contact Us</Link>
            </div>
            <div className="text-xs mt-6">© 2024, Team SLACMS-RIIT. All rights reserved.</div>
          </div>
        </div>
      </div>
      <div className="col-span-9 2xl:col-span-10 min-w-full px-8 py-8 min-h-screen">
        {children}
      </div>
    </div>
  );
}
