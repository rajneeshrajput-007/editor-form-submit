
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileText, Eye } from "lucide-react";

interface HtmlEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ 
  initialValue = '', 
  onChange 
}) => {
  const [content, setContent] = useState(initialValue);
  const [activeTab, setActiveTab] = useState<string>('editor');
  const [showPreview, setShowPreview] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    onChange?.(newContent);
  };

  // Update iframe content when content changes
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(content);
      iframeDoc.close();

      // Auto-resize based on content height
      const resizeIframe = () => {
        if (iframe.contentWindow) {
          const newHeight = iframe.contentWindow.document.body.scrollHeight;
          if (newHeight > 100) {
            iframe.style.height = `${newHeight + 20}px`;
          }
        }
      };
      
      setTimeout(resizeIframe, 100);
    }
  }, [content]);

  return (
    <Card className="shadow-md w-full max-w-4xl mx-auto">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>HTML Editor</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-2"
        >
          <Eye size={16} />
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </CardHeader>
      <CardContent>
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
                <TabsContent value="editor" className="mt-0">
                  <textarea
                    className="w-full min-h-[300px] p-3 focus:outline-none"
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder="Write your HTML here..."
                  />
                </TabsContent>
                <TabsContent value="source" className="mt-0">
                  <textarea
                    className="w-full min-h-[300px] p-3 font-mono text-sm focus:outline-none"
                    value={content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder="Enter HTML source code..."
                    spellCheck={false}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          {showPreview && (
            <div className="w-full">
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="p-2 bg-gray-100 border-b">
                  <h3 className="text-sm font-medium text-gray-700">Preview</h3>
                </div>
                <div className="p-2">
                  <iframe
                    ref={iframeRef}
                    title="HTML Preview"
                    className="w-full"
                    style={{ height: '300px', border: 'none' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HtmlEditor;
