import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  ImagePlus,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  Paperclip,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import styles from "./styles.module.scss";
import { Editor } from "@tiptap/react";
import { cn } from "@/lib/utils";
import InputUrl from "@/components/popup/input-url";

type Props = {
  editor: Editor | null;
};

function Toolbar({ editor }: Props) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <InputUrl>
          <div className={styles.youtube}>
            <Paperclip size={14} />
            <span>Youtube</span>
          </div>
        </InputUrl>
        <div className={styles.image}>
          <ImagePlus size={14} />
          <span>Image</span>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={cn(styles["toolbar-item"], {
            [styles.active]: editor?.isActive("bold"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleBold().run();
          }}
        >
          <BoldIcon size={14} />
        </div>
        <div
          className={cn(styles["toolbar-item"], {
            [styles.active]: editor?.isActive("italic"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleItalic().run();
          }}
        >
          <ItalicIcon size={14} />
        </div>
        <div
          className={cn(styles["toolbar-item"], {
            [styles.active]: editor?.isActive("underline"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleUnderline().run();
          }}
        >
          <UnderlineIcon size={14} />
        </div>
        <div
          className={cn(styles["toolbar-item"], {
            [styles.active]: editor?.isActive("codeBlock"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleCodeBlock().run();
          }}
        >
          <CodeIcon size={14} />
        </div>
        <div className={styles["toolbar-item__group"]}>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("heading", { level: 1 }),
            })}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 1 }).run();
            }}
          >
            <Heading1Icon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("heading", { level: 2 }),
            })}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 2 }).run();
            }}
          >
            <Heading2Icon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("heading", { level: 3 }),
            })}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            <Heading3Icon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("heading", { level: 4 }),
            })}
            onClick={() => {
              editor?.chain().focus().toggleHeading({ level: 4 }).run();
            }}
          >
            <Heading4Icon size={14} />
          </div>
        </div>
        <div className={styles["toolbar-item__group"]}>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("orderedList"),
            })}
            onClick={() => {
              editor?.chain().focus().toggleOrderedList().run();
            }}
          >
            <ListOrderedIcon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive("bulletList"),
            })}
            onClick={() => {
              editor?.chain().focus().toggleBulletList().run();
            }}
          >
            <ListIcon size={14} />
          </div>
        </div>
        <div
          className={cn(styles["toolbar-item"], {
            [styles.active]: editor?.isActive("strike"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleStrike().run();
          }}
        >
          <StrikethroughIcon size={14} />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
