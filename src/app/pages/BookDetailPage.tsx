import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '@/app/data/booksData';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { ReservationDialog } from '@/app/components/ReservationDialog';
import { motion } from 'motion/react';

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  
  const book = booksData.find(b => b.id === id);
  
  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/50 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h2>
          <Button onClick={() => navigate('/')}>Return to Catalog</Button>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 sm:mb-6 hover:bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Back to Catalog</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </motion.div>
        
        {/* Book Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Book Cover */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-gray-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <motion.div 
                  className="aspect-[3/4] relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge 
                      variant={book.available ? 'default' : 'destructive'}
                      className="text-sm w-full justify-center py-2 font-semibold shadow-lg"
                    >
                      {book.available ? '✓ Available' : '✗ Checked Out'}
                    </Badge>
                  </motion.div>
                  
                  {book.available && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setIsReservationOpen(true)}
                      >
                        Reserve This Book
                      </Button>
                    </motion.div>
                  )}
                  
                  {!book.available && (
                    <p className="text-xs sm:text-sm text-gray-600 text-center font-medium">
                      This book is currently unavailable
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Book Information */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-gray-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
                      {book.title}
                    </CardTitle>
                    <p className="text-lg sm:text-xl text-gray-700 font-semibold">by {book.author}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm self-start font-bold bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 border-slate-300 shadow-md">
                    {book.genre}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900">Description</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{book.description}</p>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-4 rounded-xl border border-gray-200/50">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">ISBN</h4>
                    <p className="text-sm sm:text-base text-gray-900 font-medium">{book.isbn}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100/50 p-4 rounded-xl border border-slate-200/50">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">Genre</h4>
                    <p className="text-sm sm:text-base text-gray-900 font-medium">{book.genre}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-4 rounded-xl border border-gray-200/50">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">Author</h4>
                    <p className="text-sm sm:text-base text-gray-900 font-medium">{book.author}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-green-50/50 p-4 rounded-xl border border-gray-200/50">
                    <h4 className="font-semibold text-sm text-gray-500 mb-1">Availability</h4>
                    <p className={`text-sm sm:text-base font-bold ${book.available ? 'text-green-600' : 'text-red-600'}`}>
                      {book.available ? 'In Stock' : 'Currently Unavailable'}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300 rounded-xl p-4 sm:p-5 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-bold text-blue-900 mb-3 text-sm sm:text-base">📚 Reservation Information</h4>
                  <ul className="text-xs sm:text-sm text-blue-800 space-y-2 font-medium">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Books are reserved for 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Pick up your reserved book at the front desk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Bring your student ID for verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Late pickups will result in cancellation</span>
                    </li>
                  </ul>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <ReservationDialog
        book={book}
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}