
import React from 'react';

interface SourceCodeEditorProps {
  value: string;
  onChange: (data: string) => void;
  placeholder?: string;
}

const SourceCodeEditor: React.FC<SourceCodeEditorProps> = ({ value, onChange, placeholder = 'HTML Source Code' }) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <textarea
        className="w-full min-h-[300px] p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
      />
    </div>
  );
};

export default SourceCodeEditor;
