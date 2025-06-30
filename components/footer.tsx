import Link from "next/link";

import { ORIGINAL_AUTHOR_CREDITS } from "@/constants";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        <b className="font-semibold">About this website:</b> built with React
        &amp; Next.js, Typescript, Tailwind CSS,
        Framer Motion, EmailJS, React Toaster, React Vertical Timeline &amp;
        Vercel Hosting.
      </p>      <p className="text-xs mt-2 text-gray-400">
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

export default Footer;
