package blowout.blowout.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import blowout.blowout.Entity.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}