package blowout.blowout.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import blowout.blowout.Entity.User;
import blowout.blowout.Entity.UserModel;

public interface UserModelRepo extends JpaRepository<UserModel,Integer> {
     Optional<UserModel> findByUser(User user);
    Optional<UserModel> findByUserEmail(String email);
}