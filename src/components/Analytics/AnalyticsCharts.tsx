
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AnalyticsCharts: React.FC = () => {
  const conversionData = [
    { name: 'Jan', conversion: 65 },
    { name: 'Feb', conversion: 59 },
    { name: 'Mar', conversion: 80 },
    { name: 'Apr', conversion: 81 },
    { name: 'May', conversion: 56 },
    { name: 'Jun', conversion: 55 },
    { name: 'Jul', conversion: 40 },
  ];

  const channelData = [
    { name: 'Website', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Email', value: 200 },
    { name: 'Referral', value: 100 },
  ];

  const conversationData = [
    { name: 'Mon', messages: 240, responses: 220 },
    { name: 'Tue', messages: 300, responses: 280 },
    { name: 'Wed', messages: 200, responses: 190 },
    { name: 'Thu', messages: 278, responses: 260 },
    { name: 'Fri', messages: 189, responses: 180 },
    { name: 'Sat', messages: 139, responses: 130 },
    { name: 'Sun', messages: 120, responses: 120 },
  ];

  const COLORS = ['#0066CC', '#FFA500', '#10B981', '#3B82F6'];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>View detailed analytics across different metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="conversions">
          <TabsList className="mb-4">
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
            <TabsTrigger value="channels">Lead Sources</TabsTrigger>
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="conversions">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="conversion"
                    name="Conversion Rate (%)"
                    stroke="#0066CC"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="channels">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="conversations">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="messages" name="Messages" fill="#0066CC" />
                  <Bar dataKey="responses" name="AI Responses" fill="#FFA500" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
