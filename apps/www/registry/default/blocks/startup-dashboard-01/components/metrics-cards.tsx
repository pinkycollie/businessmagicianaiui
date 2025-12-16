import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card"

const metrics = [
  {
    title: "Monthly Revenue",
    value: "$45,231",
    change: "+20.1%",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.3%",
    icon: Users,
  },
  {
    title: "Growth Rate",
    value: "12.5%",
    change: "+2.4%",
    icon: TrendingUp,
  },
  {
    title: "Engagement",
    value: "89%",
    change: "+5.2%",
    icon: Activity,
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{metric.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
