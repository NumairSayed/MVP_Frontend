"use client";

import { useState, useCallback } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface VoiceInputProps {
  onMessage: (message: string) => void;
  className?: string;
}

export function VoiceInput({ onMessage, className }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const startListening = useCallback(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        setMessage(transcript);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.start();
      setRecognition(recognition);
      setIsListening(true);
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex space-x-2", className)}>
      <div className="flex-1 flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message or click the mic to speak..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
        />
        <Button
          type="button"
          variant={isListening ? "destructive" : "secondary"}
          size="icon"
          onClick={isListening ? stopListening : startListening}
          className="shrink-0"
        >
          {isListening ? (
            <MicOff className="h-5 w-5" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </Button>
      </div>
      <Button type="submit" className="shrink-0">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}