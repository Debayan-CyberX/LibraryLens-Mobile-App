import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Moon, 
  Sun, 
  Bell, 
  User, 
  Globe, 
  Shield, 
  Smartphone, 
  HelpCircle,
  ChevronRight,
  LogOut,
  Trash2,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  Book
} from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { Button } from '@/app/components/ui/button';
import { Switch } from '@/app/components/ui/switch';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

export function SettingsPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('notificationsEnabled');
    return saved ? JSON.parse(saved) : true;
  });
  const [emailNotifications, setEmailNotifications] = useState(() => {
    const saved = localStorage.getItem('emailNotifications');
    return saved ? JSON.parse(saved) : false;
  });
  const [autoRenew, setAutoRenew] = useState(() => {
    const saved = localStorage.getItem('autoRenew');
    return saved ? JSON.parse(saved) : false;
  });

  const handleNotificationToggle = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    localStorage.setItem('notificationsEnabled', JSON.stringify(newValue));
    toast.success(newValue ? 'Notifications enabled' : 'Notifications disabled');
  };

  const handleEmailNotificationToggle = () => {
    const newValue = !emailNotifications;
    setEmailNotifications(newValue);
    localStorage.setItem('emailNotifications', JSON.stringify(newValue));
    toast.success(newValue ? 'Email notifications enabled' : 'Email notifications disabled');
  };

  const handleAutoRenewToggle = () => {
    const newValue = !autoRenew;
    setAutoRenew(newValue);
    localStorage.setItem('autoRenew', JSON.stringify(newValue));
    toast.success(newValue ? 'Auto-renew enabled' : 'Auto-renew disabled');
  };

  const handleClearCache = () => {
    // Clear specific cache items but keep user preferences
    const preferences = {
      darkMode: localStorage.getItem('darkMode'),
      notificationsEnabled: localStorage.getItem('notificationsEnabled'),
      emailNotifications: localStorage.getItem('emailNotifications'),
      autoRenew: localStorage.getItem('autoRenew'),
    };
    
    localStorage.clear();
    
    // Restore preferences
    Object.entries(preferences).forEach(([key, value]) => {
      if (value) localStorage.setItem(key, value);
    });
    
    toast.success('Cache cleared successfully');
  };

  const handleExportData = () => {
    const reservations = localStorage.getItem('reservations') || '[]';
    const data = {
      reservations: JSON.parse(reservations),
      exportDate: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `library-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Data exported successfully');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your preferences and account settings
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Appearance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                Appearance
              </h2>
              
              <div className="space-y-4">
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-gray-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 dark:bg-gray-600">
                      {isDarkMode ? (
                        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      ) : (
                        <Sun className="h-5 w-5 text-slate-700" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Dark Mode</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {isDarkMode ? 'Dark theme enabled' : 'Light theme enabled'}
                      </p>
                    </div>
                  </div>
                  <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                Notifications
              </h2>
              
              <div className="space-y-4">
                {/* Push Notifications */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 dark:bg-gray-600">
                      <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Push Notifications</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Receive in-app notifications
                      </p>
                    </div>
                  </div>
                  <Switch checked={notificationsEnabled} onCheckedChange={handleNotificationToggle} />
                </div>

                {/* Email Notifications */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 dark:bg-gray-600">
                      <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Email Notifications</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Get updates via email
                      </p>
                    </div>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={handleEmailNotificationToggle} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Library Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Book className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                Library Preferences
              </h2>
              
              <div className="space-y-4">
                {/* Auto-Renew */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 dark:bg-gray-600">
                      <Clock className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Auto-Renew Books</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Automatically renew borrowed books
                      </p>
                    </div>
                  </div>
                  <Switch checked={autoRenew} onCheckedChange={handleAutoRenewToggle} />
                </div>

                {/* Reservation Duration Info */}
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">Reservation Duration</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        All reservations are valid for 24 hours. Pick up books at the front desk with your ID card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Account & Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                Account & Data
              </h2>
              
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  onClick={handleExportData}
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Export My Data
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  onClick={handleClearCache}
                >
                  <span className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Clear Cache
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Library Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-slate-700 to-slate-600 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 text-white">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Library Information
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mukesh Patel School Of Engineering And Management</p>
                    <p className="text-slate-200 dark:text-slate-300">8th Floor MPSTME Campus</p>
                    <p className="text-slate-200 dark:text-slate-300">Vile Parle West, Mumbai, Maharashtra, 40056</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:mpstme@nmims.edu" className="text-slate-200 dark:text-slate-300 hover:underline">
                    mpstme@nmims.edu
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:02242334000" className="text-slate-200 dark:text-slate-300 hover:underline">
                    022 4233 4000
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="flex items-center gap-2 text-slate-200 dark:text-slate-300">
                    <Shield className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">ID card mandatory to issue books</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                About
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Version</span>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-slate-300">1.0.0</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
                  <span className="text-slate-900 dark:text-white">January 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
