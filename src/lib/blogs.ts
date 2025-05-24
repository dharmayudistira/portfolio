
type Blog = {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
};

export const BLOGS: Blog[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with Next.js",
    description:
      "Learn how to leverage Next.js features to build performant and maintainable React applications. Covering SSR, ISR, and best practices.",
    date: "2024-03-15",
    link: "https://www.google.com",
  },
  {
    id: "2",
    title: "The Power of TypeScript in Modern Web Development",
    description:
      "Discover how TypeScript improves developer experience and helps catch errors early. A practical guide to TypeScript's most useful features.",
    date: "2024-02-28",
    link: "https://www.google.com",
  },
  {
    id: "3",
    title: "Mastering CSS Grid and Flexbox",
    description:
      "Deep dive into modern CSS layout techniques. Learn how to create responsive and complex layouts using CSS Grid and Flexbox.",
    date: "2024-02-10",
    link: "https://www.google.com",
  },
];
