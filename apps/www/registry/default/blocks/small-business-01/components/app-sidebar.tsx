import * as React from "react"
import { Store } from "lucide-react"

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
      title: "Operations",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Inventory",
          url: "#",
          isActive: true,
        },
        {
          title: "Sales",
          url: "#",
        },
        {
          title: "Orders",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      items: [
        {
          title: "All Customers",
          url: "#",
        },
        {
          title: "Loyalty Program",
          url: "#",
        },
        {
          title: "Feedback",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      items: [
        {
          title: "Sales Reports",
          url: "#",
        },
        {
          title: "Inventory Reports",
          url: "#",
        },
        {
          title: "Financial Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Store Settings",
          url: "#",
        },
        {
          title: "Employees",
          url: "#",
        },
        {
          title: "Integrations",
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
          <Store className="h-6 w-6" />
          <span className="font-semibold text-lg">My Business</span>
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
