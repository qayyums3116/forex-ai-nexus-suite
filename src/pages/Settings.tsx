
import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { AISettings } from "@/components/Settings/AISettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your AI assistant and application configuration.
          </p>
        </div>
        
        <Tabs defaultValue="ai" className="space-y-4">
          <TabsList>
            <TabsTrigger value="ai">AI Configuration</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="ai" className="space-y-4">
            <AISettings />
          </TabsContent>
          <TabsContent value="account">
            <div className="rounded-md bg-muted/50 p-6 text-center">
              <h3 className="text-lg font-medium">Account Settings</h3>
              <p className="text-muted-foreground mt-2">
                Account management features will be implemented in the next version.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="integrations">
            <div className="rounded-md bg-muted/50 p-6 text-center">
              <h3 className="text-lg font-medium">External Integrations</h3>
              <p className="text-muted-foreground mt-2">
                CRM and workflow automation integrations will be available soon.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="rounded-md bg-muted/50 p-6 text-center">
              <h3 className="text-lg font-medium">Notification Settings</h3>
              <p className="text-muted-foreground mt-2">
                Notification preferences will be implemented in the next version.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
