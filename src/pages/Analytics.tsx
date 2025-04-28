
import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { MetricsCard } from "@/components/Analytics/MetricsCard";
import { AnalyticsCharts } from "@/components/Analytics/AnalyticsCharts";
import { TrendingUp, Users, MessageSquare, Clock } from "lucide-react";

const Analytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics & Reporting</h1>
          <p className="text-muted-foreground">
            Track performance metrics and analyze trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard
            title="Conversion Rate"
            value="24.8%"
            change={{ value: "+3.2%", positive: true }}
            icon={<TrendingUp className="h-4 w-4 text-forex-primary" />}
          />
          <MetricsCard
            title="Total Leads"
            value="1,285"
            change={{ value: "+122", positive: true }}
            icon={<Users className="h-4 w-4 text-forex-primary" />}
          />
          <MetricsCard
            title="AI Conversations"
            value="9,432"
            change={{ value: "+28%", positive: true }}
            icon={<MessageSquare className="h-4 w-4 text-forex-primary" />}
          />
          <MetricsCard
            title="Avg. Response Time"
            value="1.2s"
            change={{ value: "-0.3s", positive: true }}
            icon={<Clock className="h-4 w-4 text-forex-primary" />}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnalyticsCharts />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
