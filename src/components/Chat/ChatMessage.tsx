
import React from "react";
import { format } from "date-fns";
import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  return (
    <div className={cn("flex items-start gap-3", isAI ? "" : "justify-end")}>
      {isAI && (
        <div className="h-9 w-9 rounded-full bg-forex-primary flex items-center justify-center text-white">
          <Bot className="h-5 w-5" />
        </div>
      )}
      
      <div className="space-y-1 max-w-[80%]">
        <div className={cn(
          "rounded-md p-3 text-sm",
          isAI ? "bg-muted" : "bg-forex-primary text-white"
        )}>
          {message.content}
        </div>
        <p className="text-xs text-muted-foreground px-1">
          {format(message.timestamp, 'h:mm a')}
        </p>
      </div>
      
      {!isAI && (
        <div className="h-9 w-9 rounded-full bg-zinc-700 flex items-center justify-center text-white">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
};
