
import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { ChatInterface } from "@/components/Chat/ChatInterface";

const Chat: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Chat</h1>
          <p className="text-muted-foreground">
            Engage with leads and provide customer service through the AI assistant.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </DashboardLayout>
  );
};

export default Chat;
