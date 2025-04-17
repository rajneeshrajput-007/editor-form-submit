
import EditorForm from "../components/EditorForm";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Content Editor</h1>
        <p className="text-gray-600">Create rich content with HTML source editing capabilities</p>
      </header>
      <main>
        <EditorForm />
      </main>
    </div>
  );
};

export default Index;
