'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import type { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  Strikethrough,
} from 'lucide-react';

import { Button } from '@/components/composed/button/button';

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const buttonStyle = (isActive: boolean) =>
    `px-3 py-1 text-sm rounded hover:bg-secondary-blue-500 ${
      isActive ? 'bg-black text-white' : ''
    }`;

  return (
    <div className="absolute bottom-5 right-5 flex items-center gap-1 bg-primary-blue-400/80 backdrop-blur-sm rounded-lg p-1 border border-secondary-blue-500 z-20">
      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500 ${buttonStyle(editor?.isActive('bold') ?? false)}`}
        onClick={() => editor?.chain().focus().toggleBold().run()}
      >
        <Bold className="h-5 w-5 font-bold" strokeWidth={2.5} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500 ${buttonStyle(editor?.isActive('italic') ?? false)}`}
        onClick={() => editor?.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-5 w-5" strokeWidth={2} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500 ${buttonStyle(editor?.isActive('strike') ?? false)}`}
        onClick={() => editor?.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-5 w-5" strokeWidth={2} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500 ${buttonStyle(editor?.isActive('bulletList') ?? false)}`}
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
      >
        <List className="h-5 w-5" strokeWidth={2} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="h-5 w-5" strokeWidth={2} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-5 w-5" strokeWidth={2} />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className={`h-10 w-10 p-0 text-primary-blue-200 hover:text-white hover:bg-secondary-blue-500`}
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h-5 w-5" strokeWidth={2} />
      </Button>
    </div>
  );
};

export interface RichTextEditorProps {
  content: string;
  onUpdate?: (value: string) => void;
}

export function RichTextEditor({ content, onUpdate }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML());
    },
  });

  return (
    <div className="relative w-full bg-secondary-blue-500 overflow-hidden min-h-[220px] pb-20 rounded-md border border-secondary-blue-400">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 text-white [&_.ProseMirror]:outline-none [&_.ProseMirror]:text-white [&_.ProseMirror_*]:text-white [&_.ProseMirror_ul]:pl-5 [&_.ProseMirror_ol]:pl-5 [&_.ProseMirror_*]:mb-2"
      />
    </div>
  );
}
