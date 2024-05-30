'use client';

import { TfiMapAlt } from "react-icons/tfi";
import { useEffect, useState } from 'react';

const Table = () => {
    const [smallView, setSmallView] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setSmallView(window.innerWidth < 768);
        };

        // Add event listener for resize
        window.addEventListener("resize", handleResize);

        // Call handleResize once to set the initial state
        handleResize();

        // Cleanup by removing the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div>
        {smallView ? (
            <div className="border-prime-green bg-slate-50 border-separate rounded-t-3xl grid grid-cols-2 p-5 gap-y-1">
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Property Type</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>Amaia Laguna</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Model</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>Amaia Lands</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Location</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>Laguna</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Area</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>50sqm</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Price</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>2.2 M</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8 font-bold'>Availability</h1>
                <h1 className='px-0 py-0 2xl:py-4 2xl:px-8'>Ready for Occupancy</h1>
            </div>
            ):
            (<table className="table-auto border border-prime-green bg-slate-50 table content-table border-separate rounded-t-3xl sm:px-3 md:py-5 lg:px-10 2xl:px-16 2xl:py-6 responsive-table">
                <thead>
                    <tr>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Property Type</th>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Model</th>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Location</th>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Area</th>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Price</th>
                        <th className='px-0 py-0 md:px-5 xl:px-6 2xl:py-4 2xl:px-8'>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>Amaia Laguna</td>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>Amaia Lands</td>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>Laguna</td>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>50sqm</td>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>2.2 M</td>
                        <td className='px-0 py-0 text-center md:px-3 xl:px-6 2xl:py-4 2xl:px-8'>Ready for Occupancy</td>
                    </tr>
                </tbody>
            </table>)}
        <div className='bg-prime-green flex justify-between gap-x-10 w-full text-slate-50 px-5 sm:px-6 xl:px-16 py-5 rounded-b-3xl'>
            <div className="2xl:2xl:flex items-center justify-center space-y-1 gap-x-2">
                <TfiMapAlt className="text-2xl"/>
                <h1 className="text-sm hover:underline underline-offset-4">View Property Map</h1>
            </div>
            
            <button className="bg-prime-yellow hover:bg-amber-500 px-2 md:px-5 xl:px-6 py-3 text-sm rounded-2xl text-black montserrat font-bold">View Property Full Details</button>
        </div>
    </div>

  )
}

export default Table