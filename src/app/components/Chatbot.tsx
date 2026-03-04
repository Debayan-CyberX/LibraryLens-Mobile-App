import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { ScrollArea } from '@/app/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm LibraryLens Assistant. I can help you with library hours, location, book reservations, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Hours
    if (message.includes('hour') || message.includes('time') || message.includes('open') || message.includes('close')) {
      return "📅 **Library Hours:**\n\n• Monday - Friday: 8:00 AM - 10:00 PM\n• Saturday: 9:00 AM - 6:00 PM\n• Sunday: 10:00 AM - 5:00 PM";
    }

    // Location
    if (message.includes('location') || message.includes('where') || message.includes('address') || message.includes('floor')) {
      return "📍 **Library Location:**\n\nThe library is located on the 8th Floor of MPSTME Campus at:\n\nMukesh Patel School Of Engineering And Management\nVile Parle West\nMumbai, Maharashtra, 40056";
    }

    // Contact
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('call')) {
      return "📞 **Contact Information:**\n\n• Phone: 022 4233 4000\n• Email: mpstme@nmims.edu\n\nFeel free to reach out during library hours!";
    }

    // ID Card / Requirements
    if (message.includes('id') || message.includes('card') || message.includes('requirement') || message.includes('need')) {
      return "🪪 **Important Requirements:**\n\n⚠️ ID card is mandatory to issue a book. Please ensure you bring your student ID card when visiting the library to pick up or borrow books.";
    }

    // Reservation / Reserve / Book
    if (message.includes('reserve') || message.includes('reservation') || message.includes('book a book') || message.includes('how to reserve')) {
      return "📖 **How to Reserve a Book:**\n\n1. Browse the catalog on the home page\n2. Click on the book you want to reserve\n3. Click the 'Reserve Book' button\n4. Fill in your details (name, student ID, email)\n5. Your reservation is valid for 24 hours\n6. Pick up the book at the front desk with your student ID\n\nRemember: ID card is mandatory!";
    }

    // Availability / Available
    if (message.includes('available') || message.includes('availability') || message.includes('stock')) {
      return "✅ **Book Availability:**\n\nYou can check real-time availability of any book in our catalog. Each book shows:\n\n• ✓ Available - Ready to reserve\n• Checked Out - Currently borrowed\n\nVisit the Catalog page to browse all books and their availability status.";
    }

    // Profile / History
    if (message.includes('profile') || message.includes('history') || message.includes('reservation')) {
      return "👤 **Your Profile:**\n\nVisit the Profile page to:\n\n• View active reservations\n• Check reservation expiry times\n• See your borrowing history\n• Cancel reservations if needed\n\nClick the Profile link in the navigation menu.";
    }

    // Map / Directions
    if (message.includes('map') || message.includes('direction') || message.includes('how to get')) {
      return "🗺️ **Find the Library:**\n\nThe library is on the 8th Floor of MPSTME Campus. You can view the interactive map by clicking 'Library Map' in the navigation menu. The map shows the exact location and contact details.";
    }

    // Search / Find books
    if (message.includes('search') || message.includes('find book') || message.includes('look for')) {
      return "🔍 **Search for Books:**\n\nUse the search bar on the Catalog page to:\n\n• Search by book title\n• Search by author name\n• Filter by genre (Fiction, Science, History)\n\nThe catalog has 24 books available for you to browse!";
    }

    // Help / What can you do
    if (message.includes('help') || message.includes('what can') || message.includes('assist')) {
      return "💡 **I can help you with:**\n\n• Library hours and location\n• How to reserve books\n• Book availability information\n• Contact details\n• ID card requirements\n• Your profile and reservations\n• General library policies\n\nJust ask me anything!";
    }

    // Catalog
    if (message.includes('catalog') || message.includes('collection') || message.includes('how many books')) {
      return "📚 **Our Collection:**\n\nWe have 24 books in our digital catalog across three genres:\n\n• Fiction\n• Science\n• History\n\nBrowse the full catalog on the home page!";
    }

    // Default response
    return "I'm here to help! You can ask me about:\n\n• Library hours\n• Location & directions\n• How to reserve books\n• Contact information\n• ID requirements\n• Book availability\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are the library hours?",
    "Where is the library?",
    "How do I reserve a book?",
    "Is ID card required?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 transition-all duration-300"
              aria-label="Open chat"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[70vh] sm:h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 dark:from-gray-700 dark:to-gray-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">LibraryLens Assistant</h3>
                  <p className="text-xs text-slate-200 dark:text-gray-300">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-white/20 text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                        message.isBot
                          ? 'bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white'
                          : 'bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-600 dark:to-slate-500 text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      <p className={`text-[10px] mt-1 ${message.isBot ? 'text-slate-500 dark:text-gray-400' : 'text-slate-200'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {!message.isBot && (
                      <div className="h-8 w-8 rounded-full bg-slate-600 dark:bg-slate-500 flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2 pt-2"
                  >
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickQuestion(question)}
                          className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 text-slate-700 dark:text-gray-300 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-900">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 border-slate-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-slate-500 focus:ring-slate-500/20"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-600 dark:to-slate-500 hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-700 dark:hover:to-slate-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}