import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface StateData {
  name: string;
  status: "safe" | "semi-critical" | "critical";
  recharge: number;
}

const MOCK_STATE_DATA: StateData[] = [
  { name: "Maharashtra", status: "safe", recharge: 85 },
  { name: "Rajasthan", status: "critical", recharge: 45 },
  { name: "Karnataka", status: "semi-critical", recharge: 65 },
  { name: "Gujarat", status: "safe", recharge: 78 },
  { name: "Tamil Nadu", status: "semi-critical", recharge: 62 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "safe":
      return "bg-safe text-safe-foreground";
    case "semi-critical":
      return "bg-warning text-warning-foreground";
    case "critical":
      return "bg-critical text-critical-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const IndiaMap = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>State-wise Groundwater Status</CardTitle>
        <CardDescription>Interactive map showing groundwater categories across India</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-safe" />
              <span className="text-sm text-muted-foreground">Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-warning" />
              <span className="text-sm text-muted-foreground">Semi-Critical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-critical" />
              <span className="text-sm text-muted-foreground">Critical</span>
            </div>
          </div>
          
          {MOCK_STATE_DATA.map((state) => (
            <div
              key={state.name}
              className="flex items-center justify-between p-4 rounded-lg bg-gradient-flow border border-border hover:shadow-water transition-all cursor-pointer"
            >
              <div>
                <h4 className="font-semibold text-foreground">{state.name}</h4>
                <p className="text-sm text-muted-foreground">Annual Recharge: {state.recharge}%</p>
              </div>
              <Badge className={getStatusColor(state.status)}>
                {state.status.replace("-", " ").toUpperCase()}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IndiaMap;
