
import React from 'react';

interface EmailTemplateViewerProps {
  htmlContent: string;
}

const EmailTemplateViewer: React.FC<EmailTemplateViewerProps> = ({ htmlContent }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-md">
      <div className="p-4 bg-gray-100 border-b">
        <h3 className="font-medium text-gray-700">Email Template Preview</h3>
      </div>
      <div className="p-2">
        <iframe
          title="Email Template Preview"
          srcDoc={htmlContent}
          className="w-full"
          style={{ height: '600px', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default EmailTemplateViewer;
