import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold">DataMind AI</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}