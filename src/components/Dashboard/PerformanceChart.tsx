
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PerformanceChart: React.FC = () => {
  const data = [
    { name: 'Jan', leads: 40, conversions: 12, revenue: 24 },
    { name: 'Feb', leads: 30, conversions: 8, revenue: 18 },
    { name: 'Mar', leads: 60, conversions: 20, revenue: 38 },
    { name: 'Apr', leads: 50, conversions: 18, revenue: 42 },
    { name: 'May', leads: 70, conversions: 24, revenue: 55 },
    { name: 'Jun', leads: 90, conversions: 32, revenue: 70 },
    { name: 'Jul', leads: 100, conversions: 38, revenue: 85 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Leads, conversions, and revenue over time</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">This year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leads" stroke="#0066CC" strokeWidth={2} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#FFA500" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
