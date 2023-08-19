import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar/toolbar";

type Props = {};

function TextEditor({}: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  return (
    <div>
      <Toolbar />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditor;
