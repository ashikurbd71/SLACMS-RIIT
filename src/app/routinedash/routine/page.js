// src/components/Timetable.js
import React from 'react';

export default function Routine() {
  const timetable = [
    { day: 'Sunday', periods: [ '28542 US Hardware Lab', '28541 HA 506 29041 SI 506', '', '28544 EH 506', ] },
    { day: 'Monday', periods: [ '28543 SA 606', '28542 US 606 26841 SN 606', '28541 HA 506 29041 SI 506', '', '28544 EH 506', ] },
    { day: 'Tuesday', periods: ['28543 SA Hardware Lab', '28543 US 506 29041 SI 506', '28541 HA 506', '', '28544 EH 506', ] },
    { day: 'Wednesday', periods: ['28543 SA 506 26841 SN 506 28531 LK 506 28541 HA 506', '28531 LK 604 28543 SA 604', '', '28544 EH 604', ] },
    { day: 'Thursday', periods: ['28544 EH 604 28543 SA 604 28531 LK 604', '26841 SN Electronics Lab', ] },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Timetable</h1> */}
      <table className="table-auto w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Day</th>
            {Array.from({ length: 5 }).map((_, i) => (
              <th key={i} className="border border-black px-4 py-2">{i + 1}</th>
            ))}
          </tr>
          <tr>
            <th className="border border-black px-4 py-2">Time</th>
            <th className="border border-black px-4 py-2">8:00-8:45</th>
            <th className="border border-black px-4 py-2">8:45-9:30</th>
            <th className="border border-black px-4 py-2">9:30-10:15</th>
            <th className="border border-black px-4 py-2">10:15-11:00</th>
            <th className="border border-black px-4 py-2">11:00-11:45</th>
       
           
          
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2">{entry.day}</td>
              {entry.periods.map((period, i) => (
                <td key={i} className="border border-black px-4 py-2">{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


