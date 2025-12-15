import * as React from "react"
import { User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/default/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Workspace",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
          isActive: true,
        },
        {
          title: "Time Tracking",
          url: "#",
        },
        {
          title: "Calendar",
          url: "#",
        },
      ],
    },
    {
      title: "Clients",
      url: "#",
      items: [
        {
          title: "All Clients",
          url: "#",
        },
        {
          title: "New Client",
          url: "#",
        },
        {
          title: "Messages",
          url: "#",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      items: [
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
        {
          title: "Taxes",
          url: "#",
        },
      ],
    },
    {
      title: "Profile",
      url: "#",
      items: [
        {
          title: "Portfolio",
          url: "#",
        },
        {
          title: "Skills",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <User className="h-6 w-6" />
          <span className="font-semibold text-lg">My Freelance</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
