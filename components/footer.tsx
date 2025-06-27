import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME, ORIGINAL_AUTHOR_CREDITS } from "@/constants";

// Define the Footer component.
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {/* Display the copyright notice with dynamic years and owner name. */}
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME.split(" ")[0]}</b> |
        All rights reserved |{" "}
        <Link
          href={EXTRA_LINKS.source_code}
          className="font-semibold"
          target="_blank"
          rel="noreferrer noopener"
          title="View Source Code on GitHub"
        >
          View Source Code
        </Link>
      </small>      <p className="text-xs">
        {/* Provide information about the website and the technologies used. */}
        <b className="font-semibold">About this website:</b> built with React
        &amp; Next.js (App Router and Server Actions), Typescript, Tailwind CSS,
        Framer Motion, EmailJS, React Toaster, React Vertical Timeline &amp;
        Vercel Hosting.
      </p>      <p className="text-xs mt-2 text-gray-400">
        {/* Credits to original author */}
        Portfolio template by{" "}
        <Link
          href={ORIGINAL_AUTHOR_CREDITS.github}
          className="font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition"
          target="_blank"
          rel="noreferrer noopener"
          title={`Original Author: ${ORIGINAL_AUTHOR_CREDITS.name}`}
        >
          {ORIGINAL_AUTHOR_CREDITS.name}
        </Link>
        {" "}- {ORIGINAL_AUTHOR_CREDITS.license} License
      </p>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
