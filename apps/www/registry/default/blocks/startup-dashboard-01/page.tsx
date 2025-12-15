import { AppSidebar } from "@/registry/default/blocks/startup-dashboard-01/components/app-sidebar"
import { MetricsCards } from "@/registry/default/blocks/startup-dashboard-01/components/metrics-cards"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import { Separator } from "@/registry/default/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/default/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <MetricsCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4 min-h-[300px] rounded-xl bg-muted/50 p-4">
              <h3 className="text-lg font-semibold mb-2">Revenue Growth</h3>
              <div className="h-full flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </div>
            <div className="col-span-3 min-h-[300px] rounded-xl bg-muted/50 p-4">
              <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
              <div className="space-y-2">
                <div className="p-2 rounded border">New customer signup</div>
                <div className="p-2 rounded border">Product launch completed</div>
                <div className="p-2 rounded border">Funding milestone reached</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
