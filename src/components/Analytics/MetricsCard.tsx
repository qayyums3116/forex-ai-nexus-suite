
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string;
  description?: string;
  change?: { value: string; positive: boolean };
  icon?: React.ReactNode;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  description,
  change,
  icon,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {icon && <div className="rounded-full bg-primary/10 p-2">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${change.positive ? 'text-forex-success' : 'text-forex-danger'} mt-1`}>
            {change.value} {change.positive ? 'increase' : 'decrease'}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
