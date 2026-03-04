import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { CatalogPage } from '@/app/pages/CatalogPage';
import { BookDetailPage } from '@/app/pages/BookDetailPage';
import { ProfilePage } from '@/app/pages/ProfilePage';
import { LibraryMapPage } from '@/app/pages/LibraryMapPage';
import { SettingsPage } from '@/app/pages/SettingsPage';
import { Toaster } from '@/app/components/ui/sonner';
import { Chatbot } from '@/app/components/Chatbot';
import { ThemeProvider } from '@/app/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/map" element={<LibraryMapPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
          <Toaster />
          <Chatbot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}