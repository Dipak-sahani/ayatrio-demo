"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  UserCheck,
  Users,
  Network,
  Briefcase,
  ClipboardList,
  Receipt,
  UsersRound,
  BarChart3,
  HardDrive,
  LayoutGrid,
  LucideIcon,
  UserRoundGroup,
  ShoppingCart,
  ReceiptText,
  Folder,
  Grip
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "proposal", label: "Proposal", href: "/proposal", icon: FileText },
  { id: "leads", label: "Leads", href: "/leads", icon: UserCheck },
  { id: "client", label: "Client", href: "/client", icon: Users },
  { id: "groups", label: "Groups", href: "/groups", icon: UserRoundGroup },
  { id: "services", label: "Services", href: "/services", icon: ShoppingCart },
  { id: "task", label: "Task", href: "/task", icon: ClipboardList },
  { id: "invoice", label: "Invoice", href: "/invoice", icon: ReceiptText },
  { id: "team", label: "Team", href: "/team", icon: UsersRound },
  { id: "reports", label: "Reports", href: "/reports", icon: BarChart3 },
  { id: "drive", label: "Drive", href: "/drive", icon: Folder },
  { id: "registry", label: "Registry", href: "/registry", icon: Grip },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside
      className="app-sidebar fixed left-0 top-[var(--header-height)] bottom-0 z-30 flex flex-col justify-start overflow-y-auto no-scrollbar select-none transition-colors"
      style={{
        width: "var(--sidebar-width)",
        backgroundColor: "var(--bg-surface)",
        borderRight: "1px solid var(--border-main)",
      }}
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col items-center py-1.5 w-full">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex flex-col items-center justify-center py-2.5 px-0.5 text-center transition-all group relative cursor-pointer ${isActive
                ? "font-semibold"
                : "hover:bg-gray-100/70 dark:hover:bg-gray-800/40"
                }`}
              style={{
                color: isActive ? "var(--primary)" : "var(--text-muted)",
                backgroundColor: isActive ? "var(--primary-light)" : "transparent",
              }}
              title={item.label}
            >
              {/* Active left indicator bar */}
              {isActive && (
                <div
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r"
                  style={{ backgroundColor: "var(--primary)" }}
                />
              )}

              <Icon
                className={`w-4 h-4 mb-1 transition-transform group-hover:scale-110 ${isActive
                  ? ""
                  : "text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                  }`}
                style={{
                  color: isActive ? "var(--primary)" : undefined,
                }}
              />
              <span
                className="text-[10px] leading-tight tracking-tight truncate max-w-full px-0.5"
                style={{
                  color: isActive ? "var(--primary)" : "var(--text-subtle)",
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
