
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

export const RecentLeads: React.FC = () => {
  const leads = [
    {
      id: "L-7829",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      status: "Hot Lead",
      sentiment: "Positive",
      lastContact: "2 mins ago",
      country: "United States"
    },
    {
      id: "L-7830",
      name: "Maria Garcia",
      email: "maria.g@example.com",
      status: "In Progress",
      sentiment: "Neutral",
      lastContact: "24 mins ago",
      country: "Spain"
    },
    {
      id: "L-7831",
      name: "Wei Zhang",
      email: "wei.z@example.com",
      status: "New Lead",
      sentiment: "Curious",
      lastContact: "1 hour ago",
      country: "Singapore"
    },
    {
      id: "L-7832",
      name: "Sophia Patel",
      email: "sophia.p@example.com",
      status: "Dormant",
      sentiment: "Negative",
      lastContact: "3 days ago",
      country: "United Kingdom"
    },
    {
      id: "L-7833",
      name: "Omar Hassan",
      email: "omar.h@example.com",
      status: "Converted",
      sentiment: "Positive",
      lastContact: "Yesterday",
      country: "UAE"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot Lead":
        return "bg-forex-accent text-forex-dark";
      case "In Progress":
        return "bg-forex-info text-white";
      case "New Lead":
        return "bg-forex-primary text-white";
      case "Dormant":
        return "bg-muted text-muted-foreground";
      case "Converted":
        return "bg-forex-success text-white";
      default:
        return "bg-muted";
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "text-forex-success";
      case "Negative":
        return "text-forex-danger";
      case "Curious":
        return "text-forex-info";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Leads</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Country</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Sentiment</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.email}</p>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{lead.country}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className={getSentimentColor(lead.sentiment)}>
                    {lead.sentiment}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
