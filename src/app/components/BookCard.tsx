import { Book } from '@/app/types/book';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
        onClick={() => navigate(`/book/${book.id}`)}
      >
        <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Availability Badge on Image */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-3 right-3"
          >
            <Badge 
              variant={book.available ? 'default' : 'destructive'}
              className="text-xs shadow-lg backdrop-blur-sm bg-opacity-90"
            >
              {book.available ? '✓ Available' : 'Checked Out'}
            </Badge>
          </motion.div>
        </div>
        
        <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-1 sm:mb-2">
            <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 flex-1 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {book.title}
            </h3>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-1 font-medium">
            by {book.author}
          </p>
          
          <div className="flex items-center justify-between gap-2 mt-auto">
            <Badge variant="secondary" className="text-xs whitespace-nowrap font-semibold bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 border-slate-300/50 dark:border-slate-600/50">
              {book.genre}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}