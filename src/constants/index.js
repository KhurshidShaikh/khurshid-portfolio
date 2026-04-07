import {javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    bootstrap,
    tailwind,
    git,
    mysql,
    firebase,
    flask,
    github,
    mongodb,
    nodejs,
    nextjs,
    python,
    reactnative,
    supabase,
    vscode,
    proptech,
    anonymsg,
    mywallzicon,
    simplifaiicon,
    xlogo,
    gmail,
    linkedin,
    docker,
    alumnibridge,
    Queuecare
} from "../assets/tech"

export const technologies = [
    { icon: javascript, name: "JavaScript" },
    { icon: typescript, name: "TypeScript" },
    { icon: html, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: reactjs, name: "React" },
    { icon: redux, name: "Redux" },
    { icon: bootstrap, name: "Bootstrap" },
    { icon: tailwind, name: "Tailwind" },
    { icon: git, name: "Git" },
    { icon: mysql, name: "MySQL" },
    { icon: firebase, name: "Firebase" },
    { icon: flask, name: "Flask" },
    { icon: github, name: "GitHub" },
    { icon: mongodb, name: "MongoDB" },
    { icon: nodejs, name: "Node.js" },
    { icon: nextjs, name: "Next.js" },
    { icon: python, name: "Python" },
    { icon: reactnative, name: "React Native" },
    { icon: supabase, name: "Supabase" },
    { icon: vscode, name: "VS Code" },
    { icon: docker, name: "Docker" }
]


export const projects=[
    {
    name:"QueueCare",
    description:"QueueCare is a WhatsApp-based queue management system for local clinics that replaces manual paper-based token registers. Patients join the queue via WhatsApp, receive real-time updates, and wait remotely, while clinics stay fully in control through a simple dashboard.",
    image:Queuecare,
    source_code:"https://github.com/KhurshidShaikh/QueueCare-Frontend",
    live_link:"https://queuecare.vercel.app",
    tags: ["Next.js", "WhatsApp API", "Node.js", "MongoDB"]
},

{
    name:"PropTech",
    description:"An AI-powered full-stack real estate platform enabling users to list, buy, and rent properties. Features include price prediction using ML, property recommendations, JWT-based auth, and real-time chat with Socket.io",
    image:proptech,
    source_code:"https://github.com/KhurshidShaikh/proptech-v2",
    live_link:"https://proptechv2.vercel.app",
    tags: ["React", "Node.js", "ML", "Socket.io"]
},
{
    name:"Alumni Bridge",
    description:"A comprehensive alumni networking platform built for college communities, featuring connections directory, job board, Events ,news feed, and alumni stories.",
    image:alumnibridge,
    source_code:"https://github.com/KhurshidShaikh/Alumni-Bridge",
    live_link:"https://alumnibridge.vercel.app",
    tags: ["MERN", "REST API", "Auth"]
},
{
    name:"SimplifAI",
    description:"A mobile app that simplifies complex documents into regional languages using OCR and Gemini AI. Designed for accessibility, with Supabase auth, document history, Flask backend, and intuitive UX — built with Expo.",
    image:simplifaiicon,
    source_code:"https://github.com/KhurshidShaikh/SimplifAI-app",
    tags: ["React Native", "Gemini AI", "Flask", "Supabase"]
},
{
    name:"MyWallz",
    description:"A mobile wallpaper app offering search, category-wise browsing, and AI-generated wallpapers using Cloudflare's image-gen API. Includes Firebase Auth, like/save features, and infinite scroll — built with React Native CLI.",
    image:mywallzicon,
    source_code:"https://github.com/KhurshidShaikh/Mywallz-App",
    tags: ["React Native", "Firebase", "Cloudflare AI"]
},
{
    name:"AnonyMsg",
    description:"A secure, anonymous messaging platform where users receive feedback via shareable profile links. Built with Next.js, MongoDB, NextAuth, and includes AI-suggested responses for message inspiration.",
    image:anonymsg,
    source_code:"https://github.com/KhurshidShaikh/anonymsg",
    live_link:"https://anonymssg.vercel.app",
    tags: ["Next.js", "MongoDB", "NextAuth", "AI"]
}

]


export const contact=[
    {
        icon :gmail,
        link:"mailto:khurshidsk7304@gmail.com",
        name:"Gmail"
    },
    {
        icon:xlogo,
        link:"https://x.com/__khurshid__7",
        name:"X"
    },
    {
        icon:linkedin,
        link:"https://www.linkedin.com/in/khurshidshaikh",
        name:"LinkedIn"
    }
]