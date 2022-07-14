export default function Example(example) {
  return (
    <div className="my-2 dark:bg-neutral-800 bg-neutral-300 p-6">
      <img src={example.image} />
      <h2 className="dark:text-neutral-200 my-1">Input:</h2>
      <div className="p-2 text-gray-200 dark:bg-neutral-700 rounded-lg font-mono bg-neutral-600">
        {example.input}
      </div>
      <h2 className="dark:text-neutral-200 my-1">Output:</h2>
      <div className="p-2 text-gray-200 dark:bg-neutral-700 rounded-lg font-mono bg-neutral-600">
        {example.output}
      </div>
    </div>
  );
}
