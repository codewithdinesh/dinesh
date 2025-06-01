"use client";

import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EnhancedContactCard = ({ contact }: ContactCardProps) => {
  return (
    <motion.div
      className="w-full md:w-auto"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Tooltip content={contact?.text} placement="top">
        <Link className="block" href={contact.link} target="_blank">
          <motion.div
            className={`
              bg-slate-800/50 backdrop-blur-sm border w-full md:w-fit
              px-6 py-4 flex items-center gap-3 rounded-lg shadow-lg 
              hover:shadow-xl transition-all duration-300
              ${contact.name === "Schedule Meeting" ? "text-green-500 border-green-500 hover:bg-green-900/30" : ""}
              ${contact.name === "Email" ? "text-red-300 border-red-300/30 hover:bg-red-900/30" : ""}
              ${contact.name === "LinkedIn" ? "text-blue-300 border-blue-300/30 hover:bg-blue-900/30" : ""}
              ${contact.name === "GitHub" ? "text-gray-300 border-gray-300/30 hover:bg-gray-700/50" : ""}
              ${contact.name === "Twitter" ? "text-blue-400 border-blue-400/30 hover:bg-blue-900/30" : ""}
              ${contact.name === "Instagram" ? "text-pink-400 border-pink-400/30 hover:bg-pink-900/30" : ""}
            `}
          >
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              className="text-2xl"
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
            >
              {contact.icon}
            </motion.div>

            <div>
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-sm opacity-70">{contact.text.split("@")[0]}</p>
            </div>
          </motion.div>
        </Link>
      </Tooltip>
    </motion.div>
  );
};

export default EnhancedContactCard;
