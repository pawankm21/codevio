import React from "react";
import GithubIcon from "../icons/github";

function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
      <a
        href="#"
        className="text-xl font-bold font-mono text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        CodeVio
      </a>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        All rights reserved
      </p>

      <div className="flex -mx-2">
        <a
          href="#"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Github"
        >
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
