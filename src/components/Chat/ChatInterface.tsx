
import React, { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { AIControls } from "./AIControls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperclipIcon, Send, User, Bot } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Forex AI assistant. How can I help you today with forex trading, account management, or support?",
      sender: 'ai',
      timestamp: new Date(Date.now() - 1000 * 60 * 10) // 10 mins ago
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate AI response
    setIsAITyping(true);
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(newMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsAITyping(false);
    }, 1500);
  };
  
  // Simple mock AI responses for demo
  const getAIResponse = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return "Hello! How can I assist with your forex trading needs today?";
    } else if (lowerMsg.includes('account')) {
      return "I can help you set up a new forex trading account or assist with your existing one. What specific information do you need?";
    } else if (lowerMsg.includes('trade') || lowerMsg.includes('trading')) {
      return "Our platform offers competitive spreads across major, minor, and exotic currency pairs. Would you like to know more about our trading conditions or get market insights?";
    } else if (lowerMsg.includes('deposit') || lowerMsg.includes('withdraw')) {
      return "We offer multiple secure payment methods for deposits and withdrawals. Deposits are typically instant, while withdrawals are processed within 1-2 business days. Can I guide you through the process?";
    } else {
      return "Thank you for your message. I'd be happy to help with your forex needs. Could you please provide more details so I can assist you better?";
    }
  };
  
  return (
    <Card className="flex flex-col h-[calc(100vh-9rem)] mx-auto max-w-4xl">
      <CardHeader className="px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">AI Chat Assistant</CardTitle>
          <AIControls />
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isAITyping && (
          <div className="flex items-start gap-3 animate-pulse">
            <div className="h-9 w-9 rounded-full bg-forex-primary flex items-center justify-center text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div className="rounded-md bg-muted p-3 text-sm">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Button 
            type="button" 
            size="icon" 
            variant="ghost"
          >
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            className="flex-1"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button type="submit">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};
