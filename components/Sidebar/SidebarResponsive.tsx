import React from 'react'

const SidebarResponsive = () => {
    return (
        <aside className="bg-gradient-to-tl mb-1 from-slate-500 to-slate-700 rounded text-white p-4 w-16 md:w-1/4 rounded-lg mx-1
        sidebar-closed w-full sidebar hidden md:block">

            <h1 className="text-xl md:text-2xl font-semibold text-white text-center mb-6 p-2 rounded">
                My Dashboard
            </h1>

            {/* <!-- Profile Card --> */}
            <div className="mt-4 p-4 glassmorphic-bg rounded-lg hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer">
                <img src="./images/profile-img.jpg" alt="Your Name" className="w-32 h-32 mx-auto rounded-full mb-2"/>
                    <h2 className="text-xl font-semibold text-white text-center">Hi, Dinesh</h2>
            </div>


            {/* <!-- Daily Check-in Section in the Sidebar --> */}
            <div className="block">
                <div className="mt-4 glassmorphic-bg p-2 rounded hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer">
                    <p className="text-white text-center font-semibold">Current Streak</p>
                    <p id="streak-sidebar" className="text-white text-center font-semibold text-2xl"></p>
                </div>
            </div>

            <div className="mt-8 p-4 glassmorphic-bg rounded-lg overflow-clip">
                <h2 className="text-lg md:text-xl text-white text-center font-semibold">Joke of the Day</h2>
                <p className="text-sm text-white text-center" id="joke">Loading joke...</p>
            </div>
        </aside>
    )
}

export default SidebarResponsive