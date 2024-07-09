import React from 'react'
// import * as React from "react";


type SidebarItemProps = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;

};

const SidebarItem: React.FC<SidebarItemProps> = (
    { icon: IconComponent,
        title
    }
) => {
    return (
        <div className='flex m-1 glassmorphic-bg p-2 rounded hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer '>

            {/* icon */}
            <div className='mr-2 p-1'>
                <IconComponent className='' />
            </div>

            <div className='w-1 bg-slate-300 rounded-2xl mr-3'>

            </div>


            <div className='flex-1 flex  items-center '>

                <p>
                    {

                        title
                    }
                </p>

            </div>

        </div>
    )
}

export default SidebarItem