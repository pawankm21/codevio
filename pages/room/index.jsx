import Editor from "../../components/room/code-editor";
import Question from "../../components/room/question";
import PrimaryButton from "../../components/primary-button";
import Chat from "../../components/room/chat";
export default function Room() {
  const QUESTIONS = [
    {
      id: 1,
      name: "Construct Binary Tree from Preorder and Inorder Traversal",
      description:
        "Given preorder and inorder traversal of a tree, construct the binary tree.",
      examples: [
        {
          input: "preorder: [3,9,20,15,7]\ninorder: [9,3,15,20,7]",
          output: "[3,9,20,null,null,15,7]",
          image:
            "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
        },
        {
          input: "preorder: [3,9,20,15,7]\ninorder: [9,3,15,7,20]",
          output: "[3,9,20,null,null,15,7]",
          image:
            "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
        },
      ],
      constraints: [
        "The tree should be constructed in-place.",
        "The tree should be constructed in-place.",
        "The tree should be constructed in-place.",
        "The tree should be constructed in-place.",
      ],
    },
  ];
  return (
    <div className="w-full h-full dark:bg-neutral-900 ">
      <div className="grid md:grid-cols-8 divide-x divide-neutral-300 h-full ">
        <div className="col-span-3 h-[96vh] overflow-y-scroll">
          <div className="mt-10 p-8 w-full ">
            <Question {...QUESTIONS[0]} />
          </div>
        </div>
        <div className=" col-span-3 w-full h-[96vh] pt-4 overflow-y-auto">
          <Editor />
        </div>{" "}
        <div className="flex flex-col justify-end col-span-2 my-2">
          <Chat />
        </div>
      </div>
      <div className="w-full flex place-items-center p-2 border-t border-neutral-400 justify-center gap-4 ">
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Input Custom Testcases
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Run
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Submit
        </button>
        <button className="dark:bg-blue-900 bg-blue-400 p-2 rounded active:shadow-none shadow-blue-200 shadow-sm  dark:text-white">
          Open Console
        </button>
      </div>
    </div>
  );
}
