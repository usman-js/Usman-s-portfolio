import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Usman",
  lastName: "Ali",
  name: `Usman Ali`,
  role: "Shopify developer",
  avatar: "/images/avatar.jpg",
  email: "theusmanais@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about solving real world problems.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/usman-js",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/usman-js/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/usman.js1/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@usman.js1",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Shopify apps and themes that solve real e-commerce problems.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Shopify Developer</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} building custom apps and themes with{" "}
      <Text as="span" size="xl" weight="strong">Shopify</Text>, where I create seamless <br /> shopping experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Lahore, Pakistan`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
    <>
      {person.firstName} is a Lahore-based {person.role.toLowerCase()} with a passion for turning
       merchant problems into simple, functional, and engaging shopping experiences. 
       I build custom Shopify apps and themes using technologies
        like React, Next.js, Liquid, and the Shopify Admin API, with a strong focus 
        on clean design, usability, and continuous learning.
    </>
    ),
  },
  work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "Falconxoft",
      timeframe: "2026 - Present",
      role: "Web Development Intern",
      achievements: [
        <>
          Working with modern web technologies including HTML, CSS, JavaScript, React,
          Python, Django, and Django REST Framework.
        </>,
        <>
          Building and improving web applications while gaining practical experience
          with frontend development, backend development, APIs, and database concepts.
        </>,
        <>
          Developing responsive user interfaces and applying modern development
          practices to real-world projects.
        </>,
      ],
      images: [],
    },
  ],
},
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Punjab groups of collages",
        description: <>Inter in computer science.</>,
      },
      {
        name: "Build the Future",
        description: <>Studying online AI engineering and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <> Building responsive and modern user interfaces with HTML, CSS,
          JavaScript, React, Next.js, and Tailwind CSS.</>
        ),
        tags: [
         {
          name: "HTML",
          icon: "html",
        },
        {
          name: "CSS",
          icon: "css",
        },
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "React",
          icon: "react",
        },
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
        },
      ],
      images: [],
    },
      {
      title: "Full-Stack Development",
      description: (
        <>
          Building full-stack applications with Next.js, server-side
          functionality, authentication, APIs, and PostgreSQL databases.
        </>
      ),
      tags: [
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
      ],
      images: [],
    },
{
      title: "Shopify App & Theme Development",
      description: (
        <>
          Building custom Shopify apps and themes using Remix, Liquid,
          Theme App Extensions, and the Shopify Admin API (GraphQL).
        </>
      ),
      tags: [
        {
          name: "Remix",
          icon: "remix",
        },
        {
          name: "Liquid",
          icon: "liquid",
        },
        {
          name: "Shopify CLI",
          icon: "shopify",
        },
        {
          name: "GraphQL",
          icon: "graphql",
        },
      ],
      images: [],
    },
      {
      title: "Tools & Workflow",
      description: (
        <>
          Using Git and GitHub to manage projects, track changes, and
          maintain a professional development workflow.
        </>
      ),
      tags: [
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "GitHub",
          icon: "github",
        },
      ],
      images: [],
    },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
