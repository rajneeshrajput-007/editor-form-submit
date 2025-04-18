
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichTextEditor from './RichTextEditor';
import SourceCodeEditor from './SourceCodeEditor';
import EmailTemplateViewer from './EmailTemplateViewer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, FileText, Eye } from "lucide-react";

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
  const [showPreview, setShowPreview] = useState<boolean>(true);
  
  // Sync content between editor and source view
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
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Create Content</CardTitle>
              <CardDescription>
                Enter your content title and use the editor below to create rich content.
              </CardDescription>
            </div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2"
            >
              <Eye size={16} />
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-full">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-2">
                    <TabsTrigger value="editor" className="flex items-center gap-2">
                      <FileText size={16} />
                      Editor
                    </TabsTrigger>
                    <TabsTrigger value="source" className="flex items-center gap-2">
                      <Code size={16} />
                      Source
                    </TabsTrigger>
                  </TabsList>
                  <div className="border rounded-md">
                    <TabsContent value="editor" className="m-0 p-0">
                      <RichTextEditor 
                        value={formData.content}
                        onChange={handleContentChange}
                      />
                    </TabsContent>
                    <TabsContent value="source" className="m-0 p-0">
                      <SourceCodeEditor 
                        value={formData.content}
                        onChange={handleContentChange}
                        placeholder="Enter HTML code here"
                      />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
              
              {showPreview && (
                <div className="w-full">
                  <div className="p-2 bg-gray-100 border-t border-x rounded-t-md">
                    <h3 className="text-sm font-medium text-gray-700">Preview</h3>
                  </div>
                  <div className="border-x border-b rounded-b-md p-2 bg-white">
                    <EmailTemplateViewer 
                      htmlContent={formData.content} 
                      height="300px"
                    />
                  </div>
                </div>
              )}
            </div>
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
