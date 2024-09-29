import { Button, Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const ContactCard = ({ contact }: ContactCardProps) => {


    return (
        <Tooltip content={contact?.text} placement="top">
            <Link href={contact.link} target="_blank">
                <button
                    className={`bg-slate-200 bg-opacity-5 my-2 p-2 flex items-center gap-2 rounded-2xl hover:text-white font-semibold
    ${contact.name === 'Schedule Meeting' ? 'text-green-500 border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white' : ''}
    ${contact.name === 'Email' ? 'text-red-500 border-red-500 hover:bg-red-600 hover:border-red-600' : ''}
    ${contact.name === 'LinkedIn' ? 'text-blue-300 border-blue-500 hover:!bg-blue-600 hover:border-blue-600' : ''}
    ${contact.name === 'GitHub' ? 'text-gray-200 border-gray-400 hover:bg-gray-600 hover:border-gray-600 hover:text-white' : ''}
    ${contact.name === 'Twitter' ? 'text-blue-300 border-blue-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white' : ''}
    ${contact.name === 'Instagram' ? 'text-pink-300 !border-pink hover:bg-pink-600 hover:border-pink-600 order-pink-500 hover:text-white' : ''}`}
                >
                    <span>{contact.icon}</span>
                    <span>{contact.text}</span>
                </button>


                {/* <p>{contact.className}</p> */}
            </Link>
        </Tooltip>
    )
}

export default ContactCard