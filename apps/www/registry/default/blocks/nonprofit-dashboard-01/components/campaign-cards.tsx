import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card"
import { Progress } from "@/registry/default/ui/progress"
import { Badge } from "@/registry/default/ui/badge"

const campaigns = [
  { 
    name: "Clean Water Initiative", 
    goal: 50000, 
    raised: 42500, 
    donors: 456,
    status: "Active",
  },
  { 
    name: "Education for All", 
    goal: 75000, 
    raised: 68200, 
    donors: 892,
    status: "Active",
  },
  { 
    name: "Food Bank Drive", 
    goal: 30000, 
    raised: 30000, 
    donors: 234,
    status: "Completed",
  },
]

export function CampaignCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {campaigns.map((campaign) => {
        const percentage = Math.round((campaign.raised / campaign.goal) * 100)
        return (
          <Card key={campaign.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{campaign.name}</CardTitle>
                <Badge variant={campaign.status === "Completed" ? "default" : "secondary"}>
                  {campaign.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{percentage}%</span>
                </div>
                <Progress value={percentage} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Raised</p>
                  <p className="text-lg font-bold">${campaign.raised.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Goal</p>
                  <p className="text-lg font-bold">${campaign.goal.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {campaign.donors} donors
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
