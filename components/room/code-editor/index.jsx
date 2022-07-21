import { useEffect, useRef } from "react";
import { useCodeMirror } from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { sublime } from "@uiw/codemirror-theme-sublime";


export default function Editor() {
  const editor = useRef();
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [cpp()],
    basicSetup: {
      lineNumbers: true,
    },
    editable: true,
    readOnly: false,
    theme: sublime,
    minHeight: "90vh",
  });
  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);
  return (
    <div>
      <div ref={editor} />
     
    </div>
  );
}
