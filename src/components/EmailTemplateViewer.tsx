
import React, { useRef, useEffect } from 'react';

interface EmailTemplateViewerProps {
  htmlContent: string;
  height?: string;
}

const EmailTemplateViewer: React.FC<EmailTemplateViewerProps> = ({ 
  htmlContent, 
  height = '600px' 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const iframe = iframeRef.current;
      // Update iframe content
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
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
      
      // Delay to ensure content is rendered
      setTimeout(resizeIframe, 100);
    }
  }, [htmlContent]);

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-md">
      <div className="p-4 bg-gray-100 border-b">
        <h3 className="font-medium text-gray-700">Email Template Preview</h3>
      </div>
      <div className="p-2">
        <iframe
          ref={iframeRef}
          title="Email Template Preview"
          className="w-full"
          style={{ height, border: 'none', overflow: 'auto' }}
        />
      </div>
    </div>
  );
};

export default EmailTemplateViewer;
