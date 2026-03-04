import { useState, useEffect } from 'react';
import { Reservation } from '@/app/types/book';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { User, BookMarked, History } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

export function ProfilePage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  
  useEffect(() => {
    // Load reservations from localStorage
    const stored = localStorage.getItem('reservations');
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);
  
  const activeReservations = reservations.filter(r => {
    const expiryDate = new Date(r.expiryDate);
    return r.status === 'active' && expiryDate > new Date();
  });
  
  const expiredReservations = reservations.filter(r => {
    const expiryDate = new Date(r.expiryDate);
    return r.status === 'active' && expiryDate <= new Date();
  });
  
  const history = reservations.filter(r => r.status === 'collected' || r.status === 'expired');
  
  const cancelReservation = (id: string) => {
    const updated = reservations.filter(r => r.id !== id);
    setReservations(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
    toast.success('Reservation cancelled');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  const getTimeRemaining = (expiryDate: string) => {
    const now = new Date();
    const expiry = new Date(expiryDate);
    const diff = expiry.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m remaining`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-2">
            <User className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Profile</h1>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your reservations and view borrowing history
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Active Reservations</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-700">{activeReservations.length}</p>
                </div>
                <BookMarked className="h-10 w-10 sm:h-12 sm:w-12 text-slate-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Expired Reservations</p>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-600">{expiredReservations.length}</p>
                </div>
                <BookMarked className="h-10 w-10 sm:h-12 sm:w-12 text-amber-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Total History</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-600">{reservations.length}</p>
                </div>
                <History className="h-10 w-10 sm:h-12 sm:w-12 text-gray-200" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Reservations Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Reservations & History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="active" className="text-sm sm:text-base">
                  Active ({activeReservations.length})
                </TabsTrigger>
                <TabsTrigger value="history" className="text-sm sm:text-base">
                  History ({reservations.length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="mt-4 sm:mt-6">
                {activeReservations.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <BookMarked className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No Active Reservations</h3>
                    <p className="text-sm sm:text-base text-gray-500">Start browsing the catalog to reserve books</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {activeReservations.map((reservation) => (
                      <div
                        key={reservation.id}
                        className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base break-words">
                              {reservation.bookTitle}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 mb-2">
                              by {reservation.bookAuthor}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                              <span>Student ID: {reservation.studentId}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="break-all">Reserved: {formatDate(reservation.reservationDate)}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:ml-4">
                            <Badge variant="default" className="text-xs whitespace-nowrap">
                              {getTimeRemaining(reservation.expiryDate)}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => cancelReservation(reservation.id)}
                              className="text-xs sm:text-sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mt-3 bg-slate-50 border border-slate-300 rounded p-2 sm:p-3">
                          <p className="text-xs sm:text-sm text-slate-800">
                            <strong>Pickup Instructions:</strong> Visit the library front desk with your student ID to collect this book before {formatDate(reservation.expiryDate)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="history" className="mt-4 sm:mt-6">
                {reservations.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <History className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No History Yet</h3>
                    <p className="text-sm sm:text-base text-gray-500">Your reservation history will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {reservations.map((reservation) => {
                      const isExpired = new Date(reservation.expiryDate) <= new Date() && reservation.status === 'active';
                      
                      return (
                        <div
                          key={reservation.id}
                          className="border rounded-lg p-3 sm:p-4 bg-gray-50"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base break-words">
                                {reservation.bookTitle}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                                by {reservation.bookAuthor}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                                <span className="break-all">Reserved: {formatDate(reservation.reservationDate)}</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="break-all">Expired: {formatDate(reservation.expiryDate)}</span>
                              </div>
                            </div>
                            
                            <Badge 
                              variant={isExpired ? 'destructive' : 'secondary'}
                              className="text-xs self-start"
                            >
                              {isExpired ? 'Expired' : reservation.status}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}