'use client';

import { useEffect, useState } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import type { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Bold,
  Code,
  Code2,
  Eraser,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  type LucideIcon,
  Minus,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from 'lucide-react';

import { Button } from '@/components/composed/button/button';
import { cn } from '@/lib/utils';

export type RichTextToolbarPreset = 'entry' | 'basic' | 'standard' | 'full';

export type RichTextToolbarAction =
  | 'bold'
  | 'italic'
  | 'strike'
  | 'code'
  | 'bulletList'
  | 'orderedList'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'blockquote'
  | 'codeBlock'
  | 'horizontalRule'
  | 'undo'
  | 'redo'
  | 'clearFormatting';

type ToolbarConfig = {
  label: string;
  icon: LucideIcon;
  command: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
  isDisabled?: (editor: Editor) => boolean;
};

const TOOLBAR_ITEMS: Record<RichTextToolbarAction, ToolbarConfig> = {
  bold: {
    label: 'Bold',
    icon: Bold,
    command: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive('bold'),
  },
  italic: {
    label: 'Italic',
    icon: Italic,
    command: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive('italic'),
  },
  strike: {
    label: 'Strikethrough',
    icon: Strikethrough,
    command: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive('strike'),
  },
  code: {
    label: 'Inline code',
    icon: Code,
    command: (editor) => editor.chain().focus().toggleCode().run(),
    isActive: (editor) => editor.isActive('code'),
  },
  bulletList: {
    label: 'Bulleted list',
    icon: List,
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
    isActive: (editor) => editor.isActive('bulletList'),
  },
  orderedList: {
    label: 'Numbered list',
    icon: ListOrdered,
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
    isActive: (editor) => editor.isActive('orderedList'),
  },
  heading1: {
    label: 'Heading 1',
    icon: Heading1,
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 1 }),
  },
  heading2: {
    label: 'Heading 2',
    icon: Heading2,
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 2 }),
  },
  heading3: {
    label: 'Heading 3',
    icon: Heading3,
    command: (editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 3 }),
  },
  blockquote: {
    label: 'Blockquote',
    icon: Quote,
    command: (editor) => editor.chain().focus().toggleBlockquote().run(),
    isActive: (editor) => editor.isActive('blockquote'),
  },
  codeBlock: {
    label: 'Code block',
    icon: Code2,
    command: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    isActive: (editor) => editor.isActive('codeBlock'),
  },
  horizontalRule: {
    label: 'Horizontal rule',
    icon: Minus,
    command: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
  undo: {
    label: 'Undo',
    icon: Undo,
    command: (editor) => editor.chain().focus().undo().run(),
    isDisabled: (editor) => !editor.can().chain().undo().run(),
  },
  redo: {
    label: 'Redo',
    icon: Redo,
    command: (editor) => editor.chain().focus().redo().run(),
    isDisabled: (editor) => !editor.can().chain().redo().run(),
  },
  clearFormatting: {
    label: 'Clear formatting',
    icon: Eraser,
    command: (editor) =>
      editor.chain().focus().clearNodes().unsetAllMarks().run(),
  },
};

const TOOLBAR_PRESETS: Record<
  RichTextToolbarPreset,
  RichTextToolbarAction[][]
> = {
  entry: [['bold', 'italic', 'bulletList']],
  basic: [
    ['bold', 'italic', 'strike'],
    ['bulletList', 'orderedList'],
    ['heading1', 'heading2'],
  ],
  standard: [
    ['bold', 'italic', 'strike', 'code'],
    ['bulletList', 'orderedList', 'blockquote'],
    ['heading1', 'heading2', 'heading3'],
  ],
  full: [
    ['bold', 'italic', 'strike', 'code'],
    ['bulletList', 'orderedList', 'blockquote'],
    ['heading1', 'heading2', 'heading3'],
    ['codeBlock', 'horizontalRule'],
    ['undo', 'redo', 'clearFormatting'],
  ],
};

const getToolbarGroups = (
  preset: RichTextToolbarPreset,
  items?: RichTextToolbarAction[]
) => {
  if (items && items.length > 0) {
    return [items];
  }

  return TOOLBAR_PRESETS[preset] ?? TOOLBAR_PRESETS.standard;
};

export interface MenuBarProps {
  editor: Editor | null;
  preset?: RichTextToolbarPreset;
  items?: RichTextToolbarAction[];
  className?: string;
}

export const MenuBar = ({
  editor,
  preset = 'standard',
  items,
  className,
}: MenuBarProps) => {
  if (!editor) return null;

  const groups = getToolbarGroups(preset, items);

  return (
    <div
      role="toolbar"
      aria-label="Rich text formatting options"
      className={cn(
        'absolute bottom-4 right-4 flex max-w-[calc(100%-2rem)] flex-wrap items-center gap-1 rounded-lg border border-secondary-blue-500 bg-primary-blue-400/80 p-1 shadow-sm backdrop-blur-sm',
        className
      )}
    >
      {groups.map((group, groupIndex) => (
        <div key={group.join('-')} className="flex items-center gap-1">
          {group.map((action) => {
            const config = TOOLBAR_ITEMS[action];
            const Icon = config.icon;
            const isActive = config.isActive?.(editor) ?? false;
            const isDisabled = config.isDisabled?.(editor) ?? false;

            return (
              <Button
                key={action}
                type="button"
                variant="ghost"
                size="sm"
                aria-label={config.label}
                aria-pressed={isActive}
                disabled={isDisabled}
                className={cn(
                  'h-9 w-9 p-0 text-primary-blue-200 hover:bg-secondary-blue-500 hover:text-white',
                  isActive && 'bg-black text-white',
                  isDisabled && 'cursor-not-allowed opacity-50'
                )}
                onClick={() => config.command(editor)}
              >
                <Icon className="h-4 w-4" strokeWidth={2.2} />
              </Button>
            );
          })}

          {groupIndex < groups.length - 1 && (
            <span className="mx-1 h-5 w-px bg-secondary-blue-400/70" />
          )}
        </div>
      ))}
    </div>
  );
};

export interface RichTextEditorProps {
  content: string;
  onUpdate?: (value: string) => void;
  toolbarPreset?: RichTextToolbarPreset;
  toolbarItems?: RichTextToolbarAction[];
  showToolbar?: boolean;
  editable?: boolean;
  placeholder?: string;
  className?: string;
  editorClassName?: string;
  toolbarClassName?: string;
}

export function RichTextEditor({
  content,
  onUpdate,
  toolbarPreset = 'standard',
  toolbarItems,
  showToolbar = true,
  editable = true,
  placeholder,
  className,
  editorClassName,
  toolbarClassName,
}: RichTextEditorProps) {
  const [isEmpty, setIsEmpty] = useState(
    !content || content.trim().length === 0
  );

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable,
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      setIsEmpty(editor.isEmpty);
    },
    onUpdate: ({ editor }) => {
      setIsEmpty(editor.isEmpty);
      onUpdate?.(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    const currentContent = editor.getHTML();
    if (content !== currentContent) {
      editor.commands.setContent(content || '', { emitUpdate: false });
    }

    setIsEmpty(editor.isEmpty);
  }, [content, editor]);

  useEffect(() => {
    if (!editor) return;
    editor.setEditable(editable);
  }, [editor, editable]);

  const shouldShowToolbar = showToolbar && editable;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-md border border-secondary-blue-400 bg-secondary-blue-500',
        shouldShowToolbar ? 'pb-24' : 'pb-4',
        className
      )}
    >
      {shouldShowToolbar && (
        <MenuBar
          editor={editor}
          preset={toolbarPreset}
          items={toolbarItems}
          className={toolbarClassName}
        />
      )}
      {placeholder && isEmpty && (
        <div className="pointer-events-none absolute left-4 top-4 text-sm text-primary-blue-200/70">
          {placeholder}
        </div>
      )}
      <EditorContent
        editor={editor}
        className={cn(
          'prose prose-sm max-w-none p-4 text-white',
          '[&_.ProseMirror]:min-h-[180px] [&_.ProseMirror]:outline-none',
          '[&_.ProseMirror]:text-white [&_.ProseMirror_*]:text-white',
          '[&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:list-outside [&_.ProseMirror_ul]:pl-6',
          '[&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:list-outside [&_.ProseMirror_ol]:pl-6',
          '[&_.ProseMirror_li]:marker:text-primary-blue-200',
          '[&_.ProseMirror_*]:mb-2',
          editorClassName
        )}
      />
    </div>
  );
}
