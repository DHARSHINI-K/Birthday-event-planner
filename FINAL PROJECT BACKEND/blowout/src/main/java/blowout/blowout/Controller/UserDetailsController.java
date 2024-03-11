// package blowout.blowout.Controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import blowout.blowout.Entity.UserDetails;
// import blowout.blowout.Repository.UserDetailsRepo;
// import blowout.blowout.Repository.UserRepo;

// import io.swagger.v3.oas.annotations.tags.Tag;

// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("/api/v1/auth")
// @CrossOrigin("*")
// public class UserDetailsController {

//     @Autowired
//     private UserDetailsRepo userRepo;

//     @Tag(name = "Add User Details", description = "To add details of registered user")
//     @PostMapping("/addUserDetails")
//     public String addUser(@RequestBody UserDetails user){
//         userRepo.save(user);
//         return "User added";
//     }

//     @Tag(name = "Get User Details", description = "To view details of registered user")
//     @GetMapping("/getUsersDetails")
//     public List<UserDetails> getUsers(){
//         return userRepo.findAll();
//     }

//     @Tag(name = "Get User Details by id", description = "To view details of registered user individually")
//     @GetMapping("/getUserDetail/{id}")
//     public Optional<UserDetails> getUserDetail(@PathVariable("id") int id){
//         return userRepo.findById(id);
//     }

//     @Tag(name = "Update User Details", description = "To update details of registered user")
//     @PutMapping("/updateUserDetails/{id}")
//     public String updateUser(@PathVariable("id") int id, @RequestBody UserDetails user) {
//         userRepo.saveAndFlush(user);
//         return "Updated";
//     }

//     @Tag(name = "Delete User Details", description = "To delete details of registered user")
//     @DeleteMapping("/deleteUserDetails/{id}")
//     public String deleteUser(@PathVariable("id") int id){
//         userRepo.deleteById(id);
//         return "User deleted";
//     }

//     @Tag(name = "Update User Details", description = "To update details of registered user")
//     @PostMapping("/updateUser")
//     public String updateUserDetails(@RequestBody UserDetails e){
//         userRepo.save(e);
//         return "Updated" + e.getUserid();
//     }
// }
