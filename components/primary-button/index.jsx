export default function PrimaryButton({ className, title, onClick }) {
  return (
    <button
          className={`rounded-lg py-4 px-8 text-lg font-mono hover:shadow-md 
      transition-all duration-100 ease-in-out  hover:scale-95   transform hover:shadow-blue-400 dark:text-neutral-300 text-neutral-900 shadow-blue-400 shadow-lg dark:bg-gray-800 bg-blue-100 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
