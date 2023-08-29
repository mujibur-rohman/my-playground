import { Button } from "antd";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <section>
      <h1>Dashboard</h1>
    </section>
  );
}
