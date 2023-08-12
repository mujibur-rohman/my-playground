import { Menu } from "lucide-react";

type Props = {
  openSidebar: () => void;
};

const Navbar = ({ openSidebar }: Props) => {
  return (
    <nav className="backdrop-blur-md h-16 flex px-3 items-center border-b-2 justify-between">
      <Menu
        className="text-ring cursor-pointer"
        onClick={() => {
          openSidebar();
        }}
      />
      <div>Avatar</div>
    </nav>
  );
};

export default Navbar;
