import * as React from "react"
import { Heart, Users, Calendar, FileText } from "lucide-react"

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
      title: "Mission",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Campaigns",
          url: "#",
          isActive: true,
        },
        {
          title: "Impact Stories",
          url: "#",
        },
        {
          title: "Goals",
          url: "#",
        },
      ],
    },
    {
      title: "Fundraising",
      url: "#",
      items: [
        {
          title: "Donations",
          url: "#",
        },
        {
          title: "Donors",
          url: "#",
        },
        {
          title: "Events",
          url: "#",
        },
        {
          title: "Grants",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Volunteers",
          url: "#",
        },
        {
          title: "Programs",
          url: "#",
        },
        {
          title: "Outreach",
          url: "#",
        },
        {
          title: "Partners",
          url: "#",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      items: [
        {
          title: "Reports",
          url: "#",
        },
        {
          title: "Transparency",
          url: "#",
        },
        {
          title: "Team",
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
          <Heart className="h-6 w-6" />
          <span className="font-semibold text-lg">Hope Foundation</span>
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
