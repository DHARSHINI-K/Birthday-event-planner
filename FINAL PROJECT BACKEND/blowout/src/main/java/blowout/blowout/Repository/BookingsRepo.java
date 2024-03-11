package blowout.blowout.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import blowout.blowout.Entity.Bookings;

public interface BookingsRepo extends JpaRepository<Bookings, Integer>{
    
    List<Bookings> findAllByUserid(int userid);
    Optional<Bookings>findByUserid(int userid);
}
 