import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { sublime } from "@uiw/codemirror-theme-sublime";
export default function Editor() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="100vh"
      width="100vw"
      theme={sublime}
      extensions={[java(), cpp(), python()]}
      onChange={onChange}
    />
  );
}
