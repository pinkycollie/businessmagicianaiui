import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card"
import { Progress } from "@/registry/default/ui/progress"

const departments = [
  { name: "Engineering", employees: 342, projects: 28, completion: 87 },
  { name: "Sales", employees: 156, projects: 45, completion: 92 },
  { name: "Marketing", employees: 89, projects: 23, completion: 78 },
  { name: "Operations", employees: 234, projects: 34, completion: 95 },
  { name: "Finance", employees: 67, projects: 12, completion: 88 },
  { name: "HR", employees: 45, projects: 18, completion: 91 },
]

export function TeamAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {departments.map((dept) => (
        <Card key={dept.name}>
          <CardHeader>
            <CardTitle className="text-base">{dept.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Employees</p>
                <p className="text-2xl font-bold">{dept.employees}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Projects</p>
                <p className="text-2xl font-bold">{dept.projects}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Project Completion</span>
                <span className="font-medium">{dept.completion}%</span>
              </div>
              <Progress value={dept.completion} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
