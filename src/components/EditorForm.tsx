
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichTextEditor from './RichTextEditor';
import SourceCodeEditor from './SourceCodeEditor';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, FileText } from "lucide-react";

interface FormData {
  title: string;
  content: string;
}

const EditorForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
  });
  const [activeTab, setActiveTab] = useState<string>('editor');
  
  const handleContentChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, title: e.target.value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title.trim()) {
      toast({
        title: "Title required",
        description: "Please provide a title for your content.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.content.trim()) {
      toast({
        title: "Content required",
        description: "Please add some content before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form data (in a real app, this would send to an API)
    console.log('Form submitted:', formData);
    
    toast({
      title: "Success!",
      description: "Your content has been submitted.",
    });
    
    // Optional: Reset form after submission
    setFormData({ title: '', content: '' });
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Create Content</CardTitle>
          <CardDescription>
            Enter your content title and use the editor below to create rich content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Enter a title"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Content</Label>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor" className="flex items-center gap-2">
                  <FileText size={16} />
                  Editor
                </TabsTrigger>
                <TabsTrigger value="source" className="flex items-center gap-2">
                  <Code size={16} />
                  Source
                </TabsTrigger>
              </TabsList>
              <TabsContent value="editor" className="mt-2">
                <RichTextEditor 
                  value={formData.content}
                  onChange={handleContentChange}
                />
              </TabsContent>
              <TabsContent value="source" className="mt-2">
                <SourceCodeEditor 
                  value={formData.content}
                  onChange={handleContentChange}
                />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Submit Content</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditorForm;
