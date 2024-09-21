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
        <div className='m-1 flex align-middle justify-center justify-items-center items-center'>

            <Link
                href={link}
                passHref
            >
                <SocialIconComponent className='w-8 h-8 cursor-pointer text-green-500 hover:text-blue-200' />
            </Link>

        </div>
    )
}

export default SocialIcon