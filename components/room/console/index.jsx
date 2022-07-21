import { useState, useRef } from 'react';
export default function Console() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
    consoleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const consoleRef = useRef();
  return <div className={"text-white bg-neutral-800 rounded bottom-0 absolute w-full " + (open ? " min-h-[30vh] " : "h-auto")}

  >
    <div className=' w-full absolute'>
      <div className={` ${open ? "" : "hidden"} w-full `} ref={consoleRef}

      >
        <div className="grid grid-cols-2 gap-4 min-h-[30vh]">
          <div className="col-span-1 bg-black text-neutral-300 m-4 p-2  ">
            <textarea className="w-full  bg-black outline-none h-full scrollbar-hide appearance-none" />
          </div>
          <div className="col-span-1 bg-black text-neutral-300 m-4 p-2">
            <h5 className="bg-neutral-800 p-1.5 rounded">Output</h5>
            <div className="overflow-auto scrollbar-hide" >

            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex place-items-center p-4 text-neutral-300-5 border-t border-neutral-400 justify-center gap-4 "  >
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Input Custom Testcases
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Run
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Submit
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white"
          onClick={handleClick}

        >
          {open?"Close":"Open"} Console
        </button>
      </div>
    </div>
  </div>;
}
