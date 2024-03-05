package blowout.blowout.Service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import blowout.blowout.Entity.User;
import blowout.blowout.Entity.UserModel;
import blowout.blowout.Repository.UserModelRepo;
import blowout.blowout.Repository.UserRepo;

@Service

public class UserService {

    @Autowired
    UserModelRepo userRepository;
    @Autowired
    UserRepo userRepo;

    public String addUser(UserModel userModel) {
        userRepository.save(userModel);
        // userRepo.save("Hello");
        return "Successfully added";
    }

    public Optional<UserModel> getUser(String email){
        return userRepository.findByUserEmail(email);
    }

    public List<UserModel> getAllUser(){
        return userRepository.findAll();
    }

    public String updateUserModel(UserModel userModel){
        Optional<User> user = userRepo.findByEmail(userModel.getUser().getEmail());
        System.out.println(user);
        if(user.isEmpty()){
            return "User Not Found";
        }
        user.get().setName(userModel.getUser().getName());
        userRepo.save(user.get());
        Optional<UserModel> userModelRepo = userRepository.findByUser(user.get());
        userModelRepo.get().setMobileNumber(userModel.getMobileNumber());
        userRepository.save(userModelRepo.get());
        return "Updated Successfully";
    }


}