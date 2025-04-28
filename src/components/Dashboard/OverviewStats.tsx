
import React from "react";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BarChart2 
} from "lucide-react";

export const OverviewStats: React.FC = () => {
  const stats = [
    {
      title: "Total Leads",
      value: "1,285",
      change: "+12%",
      icon: <Users className="h-8 w-8 text-forex-primary" />,
      positive: true
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "+3.2%",
      icon: <TrendingUp className="h-8 w-8 text-forex-success" />,
      positive: true
    },
    {
      title: "AI Conversations",
      value: "9,432",
      change: "+28%",
      icon: <MessageSquare className="h-8 w-8 text-forex-info" />,
      positive: true
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      change: "-0.3s",
      icon: <BarChart2 className="h-8 w-8 text-forex-warning" />,
      positive: true
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="dashboard-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stat-label">{stat.title}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
            <div className="rounded-full bg-primary/10 p-2">
              {stat.icon}
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-xs font-medium ${stat.positive ? 'text-forex-success' : 'text-forex-danger'}`}>
              {stat.change} from last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
