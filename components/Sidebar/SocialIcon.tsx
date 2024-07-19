import Link from 'next/link';
import React from 'react'

type SocialIconProps = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
};

const SocialIcon: React.FC<SocialIconProps> = (
    {
        icon: SocialIconComponent,
        link
    }
) => {
    return (
        <div className='m-1 flex align-middle justify-center justify-items-center items-center glassmorphic-bg p-2 rounded hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer '>

            <Link
                href={link}

                passHref
            >
                <SocialIconComponent className='w-8 h-8 cursor-pointer hover:text-blue-500' />
            </Link>

        </div>
    )
}

export default SocialIcon