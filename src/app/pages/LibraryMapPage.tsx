import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function LibraryMapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-2">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Library Location</h1>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            Find your way to the college library
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Map */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[16/10] w-full relative overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6715449869797!2d72.8331!3d19.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e5e44a9%3A0x5e9fe19e5b6d44!2sMukesh%20Patel%20School%20of%20Technology%20Management%20%26%20Engineering%2C%20SVKM&#39;s%20NMIMS!5e0!3m2!1sen!2sin!4v1737044164477!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Address</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">
                      Mukesh Patel School Of Engineering And Management<br />
                      Vile Parle West<br />
                      Mumbai, Maharashtra, 40056
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm text-gray-600">022 4233 4000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-all">mpstme@nmims.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Clock className="h-5 w-5 mr-2 text-slate-700" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900 whitespace-nowrap">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900 whitespace-nowrap">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900 whitespace-nowrap">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Directions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs sm:text-sm text-gray-600">
                <p>
                  <strong>Location:</strong> 8th Floor MPSTME Campus
                </p>
                <p>
                  <strong>Important:</strong> ID card is mandatory to issue a book.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}