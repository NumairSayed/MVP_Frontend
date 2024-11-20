"use client";

import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { VoiceInput } from '@/components/voice-input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'avatar';
  timestamp: Date;
}

interface ChatInterfaceProps {
  onMessage?: (message: string) => void;
}

export function ChatInterface({ onMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    onMessage?.(text);

    // Simulate avatar response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm processing your message. This is a placeholder response.",
        sender: 'avatar',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[300px] bg-background rounded-lg shadow-lg">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2",
                  message.sender === 'user'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{message.text}</p>
                <time className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </time>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <VoiceInput onMessage={handleNewMessage} />
      </div>
    </div>
  );
}