
import { useState } from "react";
import HtmlEditor from "../components/HtmlEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendOtpEmailTemplate } from "../data/emailTemplates";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">HTML Editor</h1>
        <p className="text-gray-600">Create and preview HTML content with live updates</p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <Tabs 
          defaultValue="editor" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="editor">New Template</TabsTrigger>
            <TabsTrigger value="email">Email Template</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <HtmlEditor />
          </TabsContent>
          
          <TabsContent value="email">
            <HtmlEditor initialValue={sendOtpEmailTemplate} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
