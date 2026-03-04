import { useState } from 'react';
import { Book, Reservation } from '@/app/types/book';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface ReservationDialogProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationDialog({ book, isOpen, onClose }: ReservationDialogProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    email: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate expiry date (24 hours from now)
    const now = new Date();
    const expiryDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    const reservation: Reservation = {
      id: Date.now().toString(),
      bookId: book.id,
      bookTitle: book.title,
      bookAuthor: book.author,
      studentName: formData.studentName,
      studentId: formData.studentId,
      email: formData.email,
      reservationDate: now.toISOString(),
      expiryDate: expiryDate.toISOString(),
      status: 'active',
    };
    
    // Get existing reservations from localStorage
    const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    
    // Add new reservation
    const updatedReservations = [...existingReservations, reservation];
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    
    // Show success message
    toast.success('Book reserved successfully!', {
      description: `${book.title} has been reserved for 24 hours. Pick it up at the front desk.`,
    });
    
    // Trigger notification event
    const event = new CustomEvent('reservationConfirmed', {
      detail: { bookTitle: book.title }
    });
    window.dispatchEvent(event);
    
    // Close dialog and navigate to profile
    onClose();
    setFormData({ studentName: '', studentId: '', email: '' });
    navigate('/profile');
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl pr-6">Reserve "{book.title}"</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Fill in your details to reserve this book for 24 hours. You'll need to pick it up at the library front desk.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="studentName" className="text-sm sm:text-base">Full Name</Label>
            <Input
              id="studentName"
              type="text"
              placeholder="Your Full Name"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              required
              className="text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-sm sm:text-base">Student ID</Label>
            <Input
              id="studentId"
              type="text"
              placeholder="S12345678"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              required
              className="text-sm sm:text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="student@college.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="text-sm sm:text-base"
            />
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-amber-800">
              <strong>Note:</strong> This reservation is valid for 24 hours. Please bring your student ID when picking up the book.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 text-sm sm:text-base">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 text-sm sm:text-base">
              Confirm Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}