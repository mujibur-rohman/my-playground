import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Youtube from "@tiptap/extension-youtube";
import TextAlign from "@tiptap/extension-text-align";

import Toolbar from "./toolbar/toolbar";
import { useEditor, EditorContent } from "@tiptap/react";
import { lowlight } from "lowlight/lib/core";
import { useMediaQuery } from "react-responsive";

// @ts-ignore
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import styles from "./styles.module.scss";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

type Props = {};

function TextEditor({}: Props) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      Placeholder.configure({
        placeholder: "Write content …",
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Youtube.configure({
        width: isDesktop ? 640 : 280,
        height: isDesktop ? 480 : 160,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class: styles["text-editor"],
        spellcheck: "false",
      },
    },
    content: ``,
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditor;
