import Example from "./example";
export default function Question(question) {
  return (
    <div>
      <h1 className="text-xl font-bold dark:text-neutral-50" id="question-title">
        <span>{question.id}.</span> {question.name}
      </h1>
      <p className="my-6 dark:text-neutral-100 text-base" id="question-description">
        {question.description}
      </p>
      <div className="" id="examples">
        <h2 className="text-2xl font-bold dark:text-neutral-50">Examples</h2>
        {question.examples.map((example, index) => (
          <Example key={index} {...example} />
        ))}
      </div>
          <div className="my-1" id="constraints">
        <h2 className="text-2xl font-bold text-neutral-50 my-1">Constraints</h2>
        {question.constraints.map((constraint, index) => (
          <li key={index} className="text-neutral-100 text-base">
            {constraint}
          </li>
        ))}
      </div>
    </div>
  );
}
