import { useState, useEffect } from 'react';
import { Bell, CheckCircle, AlertCircle, Clock, DollarSign, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Reservation } from '@/app/types/book';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  bookTitle?: string;
}

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Load notifications from localStorage
    const stored = localStorage.getItem('notifications');
    if (stored) {
      const parsed = JSON.parse(stored);
      setNotifications(parsed.map((n: any) => ({
        ...n,
        timestamp: new Date(n.timestamp),
      })));
    }
    
    // Check reservations and generate notifications
    checkReservations();
    
    // Set up interval to check reservations periodically
    const interval = setInterval(checkReservations, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  const checkReservations = () => {
    const stored = localStorage.getItem('reservations');
    if (!stored) return;

    const reservations: Reservation[] = JSON.parse(stored);
    const now = new Date();
    
    reservations.forEach((reservation) => {
      if (reservation.status !== 'active') return;
      
      const expiryDate = new Date(reservation.expiryDate);
      const hoursRemaining = (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60);
      
      // Check if reservation is expiring soon (less than 3 hours)
      if (hoursRemaining > 0 && hoursRemaining <= 3) {
        const existingNotif = notifications.find(
          n => n.id === `expiring-${reservation.id}` && n.type === 'warning'
        );
        
        if (!existingNotif) {
          addNotification({
            id: `expiring-${reservation.id}`,
            type: 'warning',
            title: 'Reservation Expiring Soon',
            message: `Your reservation for "${reservation.bookTitle}" expires in ${Math.floor(hoursRemaining)} hour(s). Please pick it up soon!`,
            timestamp: new Date(),
            read: false,
            bookTitle: reservation.bookTitle,
          });
        }
      }
      
      // Check if reservation has expired
      if (hoursRemaining <= 0) {
        const existingNotif = notifications.find(
          n => n.id === `expired-${reservation.id}` && n.type === 'error'
        );
        
        if (!existingNotif) {
          addNotification({
            id: `expired-${reservation.id}`,
            type: 'error',
            title: 'Reservation Expired',
            message: `Your reservation for "${reservation.bookTitle}" has expired. Please make a new reservation if still interested.`,
            timestamp: new Date(),
            read: false,
            bookTitle: reservation.bookTitle,
          });
        }
      }
    });
  };

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => {
      const updated = [notification, ...prev];
      localStorage.setItem('notifications', JSON.stringify(updated));
      return updated;
    });
  };

  // Add notification when a reservation is confirmed (called from other components)
  useEffect(() => {
    const handleReservationConfirmed = (event: CustomEvent) => {
      const { bookTitle } = event.detail;
      addNotification({
        id: `confirmed-${Date.now()}`,
        type: 'success',
        title: 'Reservation Confirmed',
        message: `Your reservation for "${bookTitle}" has been confirmed! Valid for 24 hours. Pick it up at the front desk with your ID card.`,
        timestamp: new Date(),
        read: false,
        bookTitle,
      });
    };

    window.addEventListener('reservationConfirmed' as any, handleReservationConfirmed);
    return () => window.removeEventListener('reservationConfirmed' as any, handleReservationConfirmed);
  }, []);

  // Sample notifications for demo
  useEffect(() => {
    // Only add sample notifications if no notifications exist
    const stored = localStorage.getItem('notifications');
    if (!stored || JSON.parse(stored).length === 0) {
      const sampleNotifications: Notification[] = [
        {
          id: '1',
          type: 'info',
          title: 'Book Available',
          message: 'The book "The Great Gatsby" you were waiting for is now available!',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          read: false,
          bookTitle: 'The Great Gatsby',
        },
        {
          id: '2',
          type: 'warning',
          title: 'Due Date Reminder',
          message: 'Reminder: Your borrowed book "1984" is due in 2 days. Please return it on time to avoid fines.',
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
          read: false,
          bookTitle: '1984',
        },
      ];
      setNotifications(sampleNotifications);
      localStorage.setItem('notifications', JSON.stringify(sampleNotifications));
    }
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      localStorage.setItem('notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const markAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }));
      localStorage.setItem('notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      localStorage.setItem('notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    localStorage.setItem('notifications', JSON.stringify([]));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <Clock className="h-5 w-5 text-amber-600" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'info':
        return <BookOpen className="h-5 w-5 text-blue-600" />;
      default:
        return <Bell className="h-5 w-5 text-slate-600" />;
    }
  };

  const getBgColor = (type: string, read: boolean) => {
    if (read) return 'bg-gray-50';
    
    switch (type) {
      case 'success':
        return 'bg-green-50 border-l-4 border-green-500';
      case 'warning':
        return 'bg-amber-50 border-l-4 border-amber-500';
      case 'error':
        return 'bg-red-50 border-l-4 border-red-500';
      case 'info':
        return 'bg-blue-50 border-l-4 border-blue-500';
      default:
        return 'bg-slate-50';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1"
          >
            <Badge className="h-5 min-w-5 px-1 flex items-center justify-center bg-red-500 text-white text-xs">
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          </motion.div>
        )}
      </Button>

      {/* Notifications Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed md:absolute right-2 md:right-0 mt-2 w-[calc(100vw-1rem)] max-w-[400px] sm:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden"
              style={{ 
                maxHeight: 'calc(100vh - 80px)',
                top: 'auto'
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </h3>
                  {unreadCount > 0 && (
                    <Badge className="bg-white/20 text-white border-0">
                      {unreadCount} new
                    </Badge>
                  )}
                </div>
                {notifications.length > 0 && (
                  <div className="flex gap-2 text-xs">
                    <button
                      onClick={markAllAsRead}
                      className="hover:underline text-slate-200"
                    >
                      Mark all as read
                    </button>
                    <span className="text-slate-400">•</span>
                    <button
                      onClick={clearAllNotifications}
                      className="hover:underline text-slate-200"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>

              {/* Notifications List */}
              <ScrollArea className="max-h-[50vh] md:max-h-[60vh]">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <Bell className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm text-slate-500">No notifications yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-200">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer ${getBgColor(
                          notification.type,
                          notification.read
                        )}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-sm text-slate-900 break-words">
                                {notification.title}
                              </h4>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="text-slate-400 hover:text-slate-600 flex-shrink-0"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-xs text-slate-600 mb-2 leading-relaxed break-words">
                              {notification.message}
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-1">
                              <span className="text-xs text-slate-500">
                                {formatTimestamp(notification.timestamp)}
                              </span>
                              {!notification.read && (
                                <Badge variant="secondary" className="text-xs bg-slate-200 text-slate-700">
                                  New
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </ScrollArea>

              {/* Footer with Legend */}
              <div className="bg-slate-50 p-3 border-t border-slate-200">
                <p className="text-xs text-slate-600 mb-2 font-medium">Notification Types:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600">Confirmed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-600">Expiring Soon</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-600">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-red-600 flex-shrink-0" />
                    <span className="text-slate-600">Overdue/Alert</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}