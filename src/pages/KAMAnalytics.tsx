import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const KAMAnalytics = () => {
  // Sample data for bar chart
  const barData = [
    { name: "Week 1", value: 45 },
    { name: "Week 2", value: 52 },
    { name: "Week 3", value: 38 },
    { name: "Week 4", value: 65 },
    { name: "Week 5", value: 58 },
    { name: "Week 6", value: 72 },
    { name: "Week 7", value: 48 },
  ];

  // Sample data for pie chart
  const pieData = [
    { name: "Active", value: 450, color: "hsl(var(--chart-1))" },
    { name: "Pending", value: 280, color: "hsl(var(--chart-2))" },
    { name: "Inactive", value: 180, color: "hsl(var(--chart-3))" },
    { name: "New", value: 90, color: "hsl(var(--chart-4))" },
  ];

  const kpis = [
    {
      label: "N2R",
      values: ["25%", "22%", "23%", "25%", "30%"],
    },
    {
      label: "NCN",
      values: ["18%", "21%", "19%", "23%", "27%"],
    },
    {
      label: "MRP",
      values: ["32%", "28%", "31%", "29%", "35%"],
    },
    {
      label: "ADS",
      values: ["15%", "17%", "16%", "18%", "20%"],
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-sm border p-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">KAM Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">shiv.udesi@zomato.com</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="hsl(var(--primary))"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - KPIs and Action Button */}
          <div className="space-y-6">
            {/* KPI Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Specific Coverage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {kpis.map((kpi, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {index + 1}) {kpi.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {kpi.values.map((value, valueIndex) => (
                        <span
                          key={valueIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Strategize Button */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full" size="lg">
                  Strategize
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KAMAnalytics;
