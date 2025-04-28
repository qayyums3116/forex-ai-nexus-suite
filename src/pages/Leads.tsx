
import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { LeadsList } from "@/components/Leads/LeadsList";

const Leads: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Lead Management</h1>
          <p className="text-muted-foreground">
            Track and manage your leads through the sales pipeline.
          </p>
        </div>
        
        <LeadsList />
      </div>
    </DashboardLayout>
  );
};

export default Leads;
