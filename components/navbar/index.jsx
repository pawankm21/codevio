import { Transition, Switch } from "@headlessui/react";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import ToggleIcon from "../icons/toggle";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <nav className="bg-white shadow dark:bg-gray-800 fixed z-50 w-full top-0 ">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center transition-all transform duration-150">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800  font-mono transition-colors duration-200 transform dark:text-white md:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              CodeVio
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ToggleIcon />
            </button>
          </div>
        </div>
        <div className={`items-center md:flex hidden `}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Switch
              checked={dark}
              onChange={setDark}
              className={`${
                dark ? "bg-neutral-600" : "bg-blue-500"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  dark ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-neutral-900`}
              />
            </Switch>
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>

          <div className="flex justify-center md:block">
            <a
              className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  className="object-cover w-full h-full  "
                  alt="avatar"
                />
              </div>

              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div>
        </div>
        <Transition
          show={isOpen}
          appear={true}
          enter="transform transition-transform duration-150"
          enterFrom=" scale-0"
          enterTo="scale-100"
          leave="transform transition-transform duration-150"
          leaveFrom="scale-100"
          leaveTo="scale-0"
        >
          <div className={`items-center md:hidden block`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="my-1 text-sm font-medium  text-gray-700  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
            </div>

            <div className="flex justify-center md:block">
              <a
                className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                href="#"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
}
