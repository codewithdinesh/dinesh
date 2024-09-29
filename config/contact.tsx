import { FaInstagram, FaLinkedin, FaTwitter, FaCalendar, FaMailchimp, FaEnvelope, FaGithub } from 'react-icons/fa';

export const contacts = [
    {
        name: 'Schedule Meeting',
        text: 'Schedule Meeting',
        link: 'https://calendly.com/dineshrathod0198/30min',
        icon: <FaCalendar />,

    },
    {
        name: 'Email',
        link: 'mailto:dineshrathod0198@gmail.com',
        text: "Email me",
        icon: <FaEnvelope />,


    },

    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/dineshrathod03/',
        text: "Connect with me",
        icon: <FaLinkedin />,

    },

    {
        name: 'GitHub',
        link: 'https://www.github.com/codewithdinesh',
        text: "See my work",
        icon: <FaGithub />,

    },

    {
        name: 'Twitter',
        link: 'https://twitter.com/codewithdinesh',
        text: "Follow me",
        icon: <FaTwitter />,

    },

    {
        name: 'Instagram',
        link: 'https://www.instagram.com/dineshrathod.ai',
        text: "Follow me",
        icon: <FaInstagram />,

    },

]
