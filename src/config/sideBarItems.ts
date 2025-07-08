import { FaCode, FaHome, FaUsers, FaCogs } from "react-icons/fa";

export interface SidebarItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

export const adminSidebarItems: SidebarItem[] = [
  { name: "Home", icon: FaHome, path: "/dashboard" },
  { name: "Users", icon: FaUsers, path: "/dashboard/users" },
  { name: "Services", icon: FaCode, path: "/dashboard/services" },
  { name: "Settings", icon: FaCogs, path: "/dashboard/settings" },
];