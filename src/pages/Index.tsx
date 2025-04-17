
import { useState } from "react";
import EditorForm from "../components/EditorForm";
import EmailTemplateViewer from "../components/EmailTemplateViewer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendOtpEmailTemplate } from "../data/emailTemplates";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Content Editor</h1>
        <p className="text-gray-600">Create rich content with HTML source editing capabilities</p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <Tabs 
          defaultValue="editor" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="editor">Rich Text Editor</TabsTrigger>
            <TabsTrigger value="email">Email Template</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <EditorForm />
          </TabsContent>
          
          <TabsContent value="email">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-gray-800">Email Template Preview</h2>
              </div>
              
              <EmailTemplateViewer htmlContent={sendOtpEmailTemplate} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
