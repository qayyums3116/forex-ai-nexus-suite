
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  MessageSquare, 
  FileText,
  RefreshCw,
  UserPlus
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  country: string;
  status: string;
  source: string;
  sentiment: string;
  dateAdded: string;
  lastContact: string;
}

export const LeadsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const leads: Lead[] = [
    {
      id: "L-7829",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      country: "United States",
      status: "Hot Lead",
      source: "Website",
      sentiment: "Positive",
      dateAdded: "2025-04-20",
      lastContact: "2 mins ago"
    },
    {
      id: "L-7830",
      name: "Maria Garcia",
      email: "maria.g@example.com",
      country: "Spain",
      status: "In Progress",
      source: "Referral",
      sentiment: "Neutral",
      dateAdded: "2025-04-18", 
      lastContact: "24 mins ago"
    },
    {
      id: "L-7831",
      name: "Wei Zhang",
      email: "wei.z@example.com",
      country: "Singapore",
      status: "New Lead",
      source: "LinkedIn",
      sentiment: "Curious",
      dateAdded: "2025-04-18",
      lastContact: "1 hour ago"
    },
    {
      id: "L-7832",
      name: "Sophia Patel",
      email: "sophia.p@example.com",
      country: "United Kingdom",
      status: "Dormant",
      source: "Google Ads",
      sentiment: "Negative",
      dateAdded: "2025-04-15",
      lastContact: "3 days ago"
    },
    {
      id: "L-7833",
      name: "Omar Hassan",
      email: "omar.h@example.com",
      country: "UAE",
      status: "Converted",
      source: "Facebook",
      sentiment: "Positive",
      dateAdded: "2025-04-12",
      lastContact: "Yesterday"
    },
    {
      id: "L-7834",
      name: "Julia Kim",
      email: "julia.k@example.com",
      country: "South Korea",
      status: "Hot Lead",
      source: "Webinar",
      sentiment: "Positive",
      dateAdded: "2025-04-10",
      lastContact: "5 hours ago"
    },
    {
      id: "L-7835",
      name: "Robert Chen",
      email: "robert.c@example.com",
      country: "Australia",
      status: "New Lead",
      source: "Trade Show",
      sentiment: "Neutral",
      dateAdded: "2025-04-08",
      lastContact: "2 days ago"
    },
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
  
  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search leads..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="w-full md:w-auto flex gap-2">
          <Button size="sm" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Country</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Source</TableHead>
              <TableHead className="hidden md:table-cell">Sentiment</TableHead>
              <TableHead className="hidden md:table-cell">Last Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
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
                <TableCell className="hidden md:table-cell">{lead.source}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className={getSentimentColor(lead.sentiment)}>
                    {lead.sentiment}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">{lead.lastContact}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Update Status
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
