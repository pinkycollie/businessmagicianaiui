import * as React from "react"
import { BarChart3 } from "lucide-react"

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
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
          isActive: true,
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Business",
      url: "#",
      items: [
        {
          title: "Customers",
          url: "#",
        },
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Sales",
          url: "#",
        },
        {
          title: "Marketing",
          url: "#",
        },
      ],
    },
    {
      title: "Growth",
      url: "#",
      items: [
        {
          title: "Metrics",
          url: "#",
        },
        {
          title: "Goals",
          url: "#",
        },
        {
          title: "Milestones",
          url: "#",
        },
      ],
    },
    {
      title: "Team",
      url: "#",
      items: [
        {
          title: "Members",
          url: "#",
        },
        {
          title: "Roles",
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
          <BarChart3 className="h-6 w-6" />
          <span className="font-semibold text-lg">Startup Hub</span>
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
