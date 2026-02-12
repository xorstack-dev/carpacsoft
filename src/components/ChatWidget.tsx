import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble Message */}
      {showBubble && !isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
          <div className="bg-background rounded-lg shadow-lg p-4 max-w-xs border border-border">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-jama-gray-light rounded-full flex items-center justify-center text-white hover:bg-jama-gray transition-colors"
              aria-label="Close bubble"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm text-foreground">
              Hi 👋 Want to chat with an expert?
            </p>
          </div>
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-background border-r border-b border-border"></div>
        </div>
      )}

      {/* Expanded Chat Form */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-80 bg-background rounded-lg shadow-xl border border-border animate-slide-in-right">
          <div className="gradient-orange text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Chat with an Expert</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-white/90 mt-1">
              We typically reply within a few hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={3}
                className="border-border resize-none"
              />
            </div>
            <Button type="submit" className="w-full gradient-orange text-white">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className="w-14 h-14 gradient-orange rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

export default ChatWidget;



