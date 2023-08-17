import { Key } from "react";
import {
  LayoutDashboardIcon,
  LucideIcon,
  Newspaper,
  FileCode2,
  Bookmark,
  Layout,
} from "lucide-react";

type Menus = {
  id: Key;
  path: string;
  name: string;
  icon: LucideIcon;
};

export const MENU_ITEM: Menus[] = [
  { id: 1, path: "/", name: "dashboard", icon: LayoutDashboardIcon },
  { id: 2, path: "/posts", name: "posts", icon: Newspaper },
  { id: 3, path: "/projects", name: "projects", icon: FileCode2 },
  { id: 4, path: "/bookmark", name: "bookmark", icon: Bookmark },
  { id: 5, path: "/website", name: "website", icon: Layout },
];
