package blowout.blowout.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import blowout.blowout.Entity.Bookings;
import blowout.blowout.Repository.BookingsRepo;
import blowout.blowout.dto.BookingResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingService {
    @Autowired
    private BookingsRepo bookRepo;
    public String addBooking(Bookings b){
        bookRepo.save(b);
        return "Booking done for user: "+b.getUserid()+ " with booking id: "+b.getBooking_id();
    }
    public BookingResponse getBooking(int id){
        Bookings booking = bookRepo.findById(id).orElseThrow();
        var userBook = BookingResponse.builder().booking_id(booking.getBooking_id()).name(booking.getName()).userid(booking.getUserid()).package_name(booking.getPackage_name()).venue(booking.getVenue()).food(booking.getFood()).members(booking.getMembers()).events(booking.getEvents()).build();
        return userBook;
    }
}