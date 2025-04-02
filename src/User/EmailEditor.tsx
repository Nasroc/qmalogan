import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

import "./editorStyles.css";

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const buttonBase = "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700";
  const activeStyle = "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200";

  return (
    <div className="flex flex-wrap gap-1 border-b border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={`${buttonBase} ${editor.isActive("bold") ? activeStyle : ""}`}>
        <FaBold />
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`${buttonBase} ${editor.isActive("italic") ? activeStyle : ""}`}>
        <FaItalic />
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`${buttonBase} ${editor.isActive("underline") ? activeStyle : ""}`}>
        <FaUnderline />
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={buttonBase}>
        <FaListUl />
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={buttonBase}>
        <FaListOl />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()} className={buttonBase}>
        <FaUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} className={buttonBase}>
        <FaRedo />
      </button>
    </div>
  );
};

const EmailEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "min-h-[300px] px-4 py-3 outline-none prose dark:prose-invert bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600",
        spellcheck: "true",
      },
    },
  });

  return (
    <div className="space-y-2">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default EmailEditor;
