import { AppSidebar } from "@/registry/default/blocks/small-business-01/components/app-sidebar"
import { InventoryTable } from "@/registry/default/blocks/small-business-01/components/inventory-table"
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
                  Business Management
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inventory</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Total Products</h3>
              <p className="text-2xl font-bold">248</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Low Stock Items</h3>
              <p className="text-2xl font-bold text-orange-600">12</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <h3 className="font-semibold mb-1">Today's Sales</h3>
              <p className="text-2xl font-bold">$3,240</p>
            </div>
          </div>
          <InventoryTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
