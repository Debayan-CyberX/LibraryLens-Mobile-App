import { useState, useMemo } from 'react';
import { booksData } from '@/app/data/booksData';
import { BookCard } from '@/app/components/BookCard';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState<string>('all');
  
  const filteredBooks = useMemo(() => {
    return booksData.filter((book) => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre = genreFilter === 'all' || book.genre === genreFilter;
      
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, genreFilter]);
  
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent mb-2">
            Digital Book Catalog
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Browse our collection of {booksData.length} books
          </p>
        </motion.div>
        
        {/* Search and Filter */}
        <motion.div 
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-400 transition-colors" />
              <Input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-slate-400 focus:ring-slate-400/20 transition-all"
              />
            </div>
            
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-slate-400 focus:ring-slate-400/20">
                <SelectValue placeholder="Filter by genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
        
        {/* Results Count */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
            Showing {filteredBooks.length} of {booksData.length} books
          </p>
        </motion.div>
        
        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">No books found matching your criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}