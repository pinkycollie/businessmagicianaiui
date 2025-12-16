import { AppSidebar } from "@/registry/default/blocks/nonprofit-dashboard-01/components/app-sidebar"
import { CampaignCards } from "@/registry/default/blocks/nonprofit-dashboard-01/components/campaign-cards"
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
                  Mission Control
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Campaigns</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Total Raised</h3>
              <p className="text-2xl font-bold">$284,500</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Donors</h3>
              <p className="text-2xl font-bold">1,847</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Volunteers</h3>
              <p className="text-2xl font-bold">342</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Lives Impacted</h3>
              <p className="text-2xl font-bold">12,500</p>
            </div>
          </div>
          <CampaignCards />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
