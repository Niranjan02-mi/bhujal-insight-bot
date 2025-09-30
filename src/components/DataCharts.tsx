import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const rechargeData = [
  { state: "Maharashtra", recharge: 85, utilization: 72 },
  { state: "Rajasthan", recharge: 45, utilization: 88 },
  { state: "Karnataka", recharge: 65, utilization: 70 },
  { state: "Gujarat", recharge: 78, utilization: 68 },
  { state: "Tamil Nadu", recharge: 62, utilization: 75 },
];

const trendData = [
  { year: "2020", safe: 15, semiCritical: 8, critical: 5 },
  { year: "2021", safe: 16, semiCritical: 7, critical: 5 },
  { year: "2022", safe: 17, semiCritical: 7, critical: 4 },
  { year: "2023", safe: 18, semiCritical: 6, critical: 4 },
  { year: "2024", safe: 19, semiCritical: 6, critical: 3 },
];

const DataCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recharge vs Utilization</CardTitle>
          <CardDescription>State-wise comparison of annual recharge and utilization rates</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rechargeData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="state" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Bar dataKey="recharge" fill="hsl(var(--primary))" name="Recharge %" />
              <Bar dataKey="utilization" fill="hsl(var(--secondary))" name="Utilization %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>5-Year Trend Analysis</CardTitle>
          <CardDescription>Distribution of states across groundwater categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="year" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="safe" stroke="hsl(var(--safe))" name="Safe" strokeWidth={2} />
              <Line type="monotone" dataKey="semiCritical" stroke="hsl(var(--warning))" name="Semi-Critical" strokeWidth={2} />
              <Line type="monotone" dataKey="critical" stroke="hsl(var(--critical))" name="Critical" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCharts;
