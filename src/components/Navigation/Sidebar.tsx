
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  MessageCircle, 
  Users, 
  BarChart2, 
  Settings,
  ChevronLeft
} from "lucide-react";

interface SidebarProps {
  open: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  return (
    <aside 
      className={cn(
        "bg-sidebar text-sidebar-foreground border-r transition-all duration-300 ease-in-out z-20",
        open ? "w-64" : "w-[70px]"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 py-4">
        {open ? (
          <h1 className="text-xl font-bold text-forex-primary">Forex AI Nexus</h1>
        ) : (
          <span className="text-xl font-bold text-forex-primary mx-auto">FN</span>
        )}
      </div>
      
      <div className="px-3 py-2">
        <nav className="space-y-1">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }
          >
            <LayoutDashboard className="h-5 w-5" />
            {open && <span>Dashboard</span>}
          </NavLink>
          
          <NavLink 
            to="/chat" 
            className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }
          >
            <MessageCircle className="h-5 w-5" />
            {open && <span>AI Chat</span>}
          </NavLink>
          
          <NavLink 
            to="/leads" 
            className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }
          >
            <Users className="h-5 w-5" />
            {open && <span>Leads</span>}
          </NavLink>
          
          <NavLink 
            to="/analytics" 
            className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }
          >
            <BarChart2 className="h-5 w-5" />
            {open && <span>Analytics</span>}
          </NavLink>
          
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              cn("nav-link", isActive && "active")
            }
          >
            <Settings className="h-5 w-5" />
            {open && <span>Settings</span>}
          </NavLink>
        </nav>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <div className="rounded-md bg-forex-primary bg-opacity-10 p-2 text-center text-xs text-forex-primary">
          {open ? (
            <p>AI Agent Status: Active</p>
          ) : (
            <p>AI</p>
          )}
        </div>
      </div>
    </aside>
  );
};
