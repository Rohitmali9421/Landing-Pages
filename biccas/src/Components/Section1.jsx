import React from 'react';
import { TbActivityHeartbeat } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";
import { FiCommand } from "react-icons/fi";

function Section1() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 py-16 px-4 md:px-16 lg:px-28 bg-gray-50">
            <div className="flex flex-col gap-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                    How we support our partner all over the world
                </h1>
                <p className="text-gray-400 text-base sm:text-lg">
                    SaaS has become a common delivery model for many business applications, including office software, messaging, payroll, DBMS, and project management software.
                </p>
                <div className='flex gap-6'>
                    
                    <div className='flex flex-col justify-center gap-3'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <h1 className='text-lg font-medium'>4.9 / 5 rating</h1>
                        <h1 className='text-gray-400 font-semibold'>Databricks</h1>
                    </div>
                    <div className='flex flex-col justify-center gap-3'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <h1 className='text-lg font-medium'>4.9 / 5 rating</h1>
                        <h1 className='text-gray-400 font-semibold'>Chainalysis</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4 p-4">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <TbActivityHeartbeat className="text-emerald-500 text-3xl" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Publishing</h2>
                        <p className="text-base sm:text-lg py-2 leading-snug text-gray-500">
                            Plan, collaborate, and publish content that drives meaningful engagement and growth for your brand.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 p-4">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <GrAnalytics className="text-emerald-500 text-3xl" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Analytics</h2>
                        <p className="text-base sm:text-lg py-2 leading-snug text-gray-500">
                            Analyze your performance and create gorgeous reports.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 p-4">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <FiCommand className="text-emerald-500 text-3xl" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Engagement</h2>
                        <p className="text-base sm:text-lg py-2 leading-snug text-gray-500">
                            Quickly navigate and engage with your audience more effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
