import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
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
import { useState } from "react";

type Props = {
  editor: Editor | null;
};

function Toolbar({ editor }: Props) {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");

  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.image}>
          <ImagePlus size={14} />
          <span>Image</span>
        </div>
        <InputUrl
          value={youtubeUrl}
          onChange={(e) => {
            setYoutubeUrl(e.target.value);
          }}
          handleSubmit={() => {
            if (!youtubeUrl) return;
            editor?.commands.setYoutubeVideo({
              src: youtubeUrl,
            });
            setYoutubeUrl("");
          }}
        >
          <div className={styles.youtube}>
            <Paperclip size={14} />
            <span>Youtube</span>
          </div>
        </InputUrl>
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
            [styles.active]: editor?.isActive("strike"),
          })}
          onClick={() => {
            editor?.chain().focus().toggleStrike().run();
          }}
        >
          <StrikethroughIcon size={14} />
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
              [styles.active]: editor?.isActive({ textAlign: "left" }),
            })}
            onClick={() => {
              editor?.chain().focus().setTextAlign("left").run();
            }}
          >
            <AlignLeftIcon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive({ textAlign: "center" }),
            })}
            onClick={() => {
              editor?.chain().focus().setTextAlign("center").run();
            }}
          >
            <AlignCenterIcon size={14} />
          </div>
          <div
            className={cn(styles["toolbar-item__group-item"], {
              [styles.active]: editor?.isActive({ textAlign: "right" }),
            })}
            onClick={() => {
              editor?.chain().focus().setTextAlign("right").run();
            }}
          >
            <AlignRightIcon size={14} />
          </div>
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
      </div>
    </div>
  );
}

export default Toolbar;
