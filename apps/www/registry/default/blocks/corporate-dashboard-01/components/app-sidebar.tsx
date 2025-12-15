import * as React from "react"
import { Building2 } from "lucide-react"

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
      title: "Executive",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Team Analytics",
          url: "#",
          isActive: true,
        },
        {
          title: "Financial Reports",
          url: "#",
        },
        {
          title: "Strategic Goals",
          url: "#",
        },
      ],
    },
    {
      title: "Human Resources",
      url: "#",
      items: [
        {
          title: "Employees",
          url: "#",
        },
        {
          title: "Recruitment",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Payroll",
          url: "#",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      items: [
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Resources",
          url: "#",
        },
        {
          title: "Vendors",
          url: "#",
        },
        {
          title: "Compliance",
          url: "#",
        },
      ],
    },
    {
      title: "Administration",
      url: "#",
      items: [
        {
          title: "Departments",
          url: "#",
        },
        {
          title: "Policies",
          url: "#",
        },
        {
          title: "Security",
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
          <Building2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Enterprise Corp</span>
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
