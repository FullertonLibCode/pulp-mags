import React from 'react';
import { MessageSquare } from 'lucide-react';

const KestralChat: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4 w-96 bg-[#132347] rounded-lg border border-[#1e3a8a] shadow-xl overflow-hidden">
      <div className="p-4 border-b border-[#1e3a8a] flex items-center bg-[#0a1128]">
        <MessageSquare className="w-6 h-6 text-[#00eeff] mr-3" />
        <div>
          <h3 className="font-semibold text-[#00eeff]">Chat with Kestral</h3>
          <p className="text-xs text-gray-400">Coming Soon</p>
        </div>
      </div>

      <div className="h-96 p-4 flex items-center justify-center">
        <p className="text-gray-400 text-center">
          The chat feature is currently under development. Check back soon to interact with Kestral directly!
        </p>
      </div>
    </div>
  );
};

export default KestralChat;