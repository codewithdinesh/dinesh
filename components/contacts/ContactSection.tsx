"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLoading } from "react-icons/ai";

import ContactCard from "./ContactCard";

import { ScrollAnimation, ScrollReveal } from "@/components/ScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contacts } from "@/config/contact";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success"); // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="container mx-auto py-24 relative"
      id="contact"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollAnimation direction="up">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
          Let&apos;s connect! Reach out through any of these platforms or send a
          message directly.
        </p>
      </ScrollAnimation>

      {/* Gradient background effect */}
      <div className="absolute -z-10 blur-3xl opacity-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-600 to-blue-600 top-0 -left-64" />
      <div className="absolute -z-10 blur-3xl opacity-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-600 to-purple-600 bottom-0 -right-64" />

      <Tabs className="w-full max-w-4xl mx-auto" defaultValue="social">
        <TabsList className="grid w-full grid-cols-2 mb-10">
          <TabsTrigger
            className="data-[state=active]:bg-green-600"
            value="social"
          >
            Social Profiles
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-green-600"
            value="message"
          >
            Send Message
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className="bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-800 p-6 shadow-xl"
          value="social"
        >
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {contacts.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent
          className="bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-800 p-6 shadow-xl"
          value="message"
        >
          <ScrollReveal>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    required
                    className="w-full p-3 rounded-md border border-slate-700 bg-slate-800/50 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all"
                    id="name"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    className="w-full p-3 rounded-md border border-slate-700 bg-slate-800/50 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all"
                    id="email"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-3 rounded-md border border-slate-700 bg-slate-800/50 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all"
                  id="subject"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  className="w-full p-3 rounded-md border border-slate-700 bg-slate-800/50 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition-all"
                  id="message"
                  rows={5}
                />
              </div>

              <motion.button
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2 disabled:opacity-70"
                disabled={formStatus === "sending"}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === "sending" ? (
                  <>
                    <AiOutlineLoading className="animate-spin mr-2" />
                    <span>Sending...</span>
                  </>
                ) : formStatus === "success" ? (
                  <span>Message Sent!</span>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ContactSection;
