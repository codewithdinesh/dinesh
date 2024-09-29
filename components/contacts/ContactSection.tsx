
"use client";
import React from 'react'

import { contacts } from "@/config/contact";
import ContactCard from './ContactCard';

const ContactSection = () => {
    return (


        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

            <div className="bg-slate-200 bg-opacity-10 p-8 rounded-md shadow-lg  ">


                <div className="flex flex-col md:flex-row justify-center gap-6">

                    {
                        contacts.map((contact) => (
                            <ContactCard key={contact.name} contact={contact} />
                        ))
                    }

                </div>
            </div>
        </div>


    )
}

export default ContactSection



