
import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { OverviewStats } from "@/components/Dashboard/OverviewStats";
import { RecentLeads } from "@/components/Dashboard/RecentLeads";
import { PerformanceChart } from "@/components/Dashboard/PerformanceChart";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your Forex AI sales and service performance.
          </p>
        </div>
        
        <OverviewStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart />
          <RecentLeads />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
