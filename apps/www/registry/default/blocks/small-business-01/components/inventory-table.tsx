import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { Badge } from "@/registry/default/ui/badge"

const inventory = [
  { id: 1, name: "Office Desk", sku: "DESK-001", stock: 45, price: "$299.99", status: "In Stock" },
  { id: 2, name: "Ergonomic Chair", sku: "CHAIR-002", stock: 8, price: "$199.99", status: "Low Stock" },
  { id: 3, name: "Monitor 27\"", sku: "MON-003", stock: 23, price: "$349.99", status: "In Stock" },
  { id: 4, name: "Wireless Mouse", sku: "MOUSE-004", stock: 120, price: "$29.99", status: "In Stock" },
  { id: 5, name: "Mechanical Keyboard", sku: "KEY-005", stock: 5, price: "$89.99", status: "Low Stock" },
  { id: 6, name: "USB-C Hub", sku: "HUB-006", stock: 67, price: "$49.99", status: "In Stock" },
]

export function InventoryTable() {
  return (
    <div className="rounded-xl border bg-card">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Inventory List</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Badge variant={item.status === "Low Stock" ? "destructive" : "default"}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
