package blowout.blowout.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import blowout.blowout.Entity.AdminModel;
import blowout.blowout.Entity.User;

public interface AdminRepo extends JpaRepository<AdminModel,Integer> {
   Optional <AdminModel>  findByUser(User user);
   Optional <AdminModel> findByUserEmail(String email);
}