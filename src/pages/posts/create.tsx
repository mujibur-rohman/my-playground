import TextEditor from "@/components/post/editor";
import Header from "@/components/post/header";

type Props = {};

function CreatePost({}: Props) {
  return (
    <section>
      <Header />
      <TextEditor />
    </section>
  );
}

export default CreatePost;
