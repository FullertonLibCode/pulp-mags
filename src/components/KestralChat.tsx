import React, { useState, useRef, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { MessageSquare, Send, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const KestralChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const { data, error } = await supabase.functions.invoke('kestral-chat', {
        body: { message: userMessage, context: messages }
      });

      if (error) throw error;

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I seem to be experiencing a temporary malfunction. Perhaps we could try again?"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-96 bg-[#132347] rounded-lg border border-[#1e3a8a] shadow-xl overflow-hidden">
      <div className="p-4 border-b border-[#1e3a8a] flex items-center bg-[#0a1128]">
        <BrainCircuit className="w-6 h-6 text-[#00eeff] mr-3" />
        <div>
          <h3 className="font-semibold text-[#00eeff]">KESTRAL</h3>
          <p className="text-xs text-gray-400">AI Curator & Exhibition Guide</p>
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-[#00eeff] text-[#0a1128]'
                    : 'bg-[#0a1128] text-gray-200'
                }`}
              >
                <ReactMarkdown className="prose prose-invert max-w-none text-sm">
                  {message.content}
                </ReactMarkdown>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#0a1128] text-gray-200 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-[#1e3a8a] bg-[#0a1128]">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about the exhibition..."
            className="flex-1 bg-[#132347] text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00eeff] border border-[#1e3a8a]"
          />
          <button
            type="submit"
            className="bg-[#00eeff] text-[#0a1128] p-2 rounded-lg hover:bg-[#00bfcc] transition-colors duration-200"
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default KestralChat;