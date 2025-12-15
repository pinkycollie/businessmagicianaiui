import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card"
import { Badge } from "@/registry/default/ui/badge"
import { Progress } from "@/registry/default/ui/progress"

const projects = [
  { 
    name: "Website Redesign", 
    client: "Tech Corp", 
    hours: 24, 
    totalHours: 40,
    rate: 85,
    status: "In Progress",
  },
  { 
    name: "Mobile App Development", 
    client: "StartupXYZ", 
    hours: 56, 
    totalHours: 80,
    rate: 95,
    status: "In Progress",
  },
  { 
    name: "Brand Identity", 
    client: "Local Biz", 
    hours: 18, 
    totalHours: 20,
    rate: 75,
    status: "Almost Done",
  },
  { 
    name: "SEO Optimization", 
    client: "E-commerce Co", 
    hours: 12, 
    totalHours: 30,
    rate: 70,
    status: "In Progress",
  },
]

export function ProjectsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => {
        const percentage = Math.round((project.hours / project.totalHours) * 100)
        const earned = project.hours * project.rate
        return (
          <Card key={project.name}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{project.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
                </div>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.hours}h / {project.totalHours}h</span>
                </div>
                <Progress value={percentage} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Rate</p>
                  <p className="text-lg font-bold">${project.rate}/hr</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Earned</p>
                  <p className="text-lg font-bold">${earned.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
