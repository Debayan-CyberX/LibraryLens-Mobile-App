export interface Book {
  id: string;
  title: string;
  author: string;
  genre: 'Fiction' | 'Science' | 'History' | 'Engineering';
  coverImage: string;
  description: string;
  available: boolean;
  isbn: string;
}

export interface Reservation {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  studentName: string;
  studentId: string;
  email: string;
  reservationDate: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'collected';
}