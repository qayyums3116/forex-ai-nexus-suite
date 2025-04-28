
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";

export const AISettings: React.FC = () => {
  const form = useForm({
    defaultValues: {
      aiModel: "gpt-4o",
      personality: "professional",
      temperature: [0.7],
      enableMultilingual: true,
      maxResponseLength: "500",
      fallbackEmail: "support@forexainexus.com",
      systemPrompt: "You are a helpful Forex trading assistant that provides professional guidance while maintaining compliance with financial regulations. Always clarify that you don't provide financial advice."
    }
  });

  const onSubmit = (data: any) => {
    console.log("AI Settings updated:", data);
    // In a real app, this would save to API/backend
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Assistant Configuration</CardTitle>
        <CardDescription>
          Customize how your AI assistant interacts with leads and customers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="aiModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AI Model</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                        <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                        <SelectItem value="claude-3">Claude 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The AI model determines capabilities and pricing.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assistant Personality</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select personality" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly & Approachable</SelectItem>
                        <SelectItem value="expert">Technical Expert</SelectItem>
                        <SelectItem value="concise">Brief & Direct</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Defines the tone and communication style.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="temperature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Creativity (Temperature): {field.value}</FormLabel>
                    <FormControl>
                      <Slider
                        defaultValue={field.value}
                        max={1}
                        step={0.1}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Higher values make responses more creative but less predictable.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxResponseLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Response Length</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormDescription>
                      Maximum tokens in AI responses.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enableMultilingual"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Multilingual Support</FormLabel>
                      <FormDescription>
                        Enable automatic language detection and translation.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fallbackEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fallback Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Human backup for complex inquiries.
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="systemPrompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>System Prompt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter system instructions for the AI..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    These instructions define how the AI behaves and responds.
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Save Settings</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
