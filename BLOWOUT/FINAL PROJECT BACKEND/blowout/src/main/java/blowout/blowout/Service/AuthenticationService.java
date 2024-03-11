package blowout.blowout.Service;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import blowout.blowout.dto.AuthenticationRequest;
import blowout.blowout.dto.RegisterRequest;
import blowout.blowout.dto.AuthenticationResponse;
import blowout.blowout.Entity.AdminModel;
import blowout.blowout.Entity.Role;
import blowout.blowout.Entity.User;
import blowout.blowout.Entity.UserModel;
import blowout.blowout.Repository.AdminRepo;
import blowout.blowout.Repository.UserModelRepo;
import blowout.blowout.Repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
        private final UserModelRepo userModelRepository;
        private final AdminRepo adminModelRepository;
        private final UserRepo userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                if (request.getUserRole().equals("user")) {
                        var user = User
                                        .builder()
                                        .name(request.getName())
                                        .email(request.getEmail())
                                        .password(passwordEncoder.encode(request.getPassword()))
                                        .role(Role.USER)
                                        .build();
                        Optional<User> existing = userRepository.findByEmail(request.getEmail());
                        if (!existing.isEmpty()) {
                                return AuthenticationResponse.builder()
                                                .token("Email Already exists")
                                                .build();
                        }
                        User savedUser = userRepository.save(user);
                        UserModel userModel = new UserModel();
                        userModel.setMobileNumber(request.getMobileNumber());
                        userModel.setUser(savedUser);
                        userModelRepository.save(userModel);
                        var jwtToken = jwtService.generateToken(user);

                        return AuthenticationResponse.builder()
                                        .token(jwtToken)

                                        .build();
                }
                var user = User
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.ADMIN)
                                .build();
                Optional<User> existing = userRepository.findByEmail(request.getEmail());
                if (!existing.isEmpty()) {
                        return AuthenticationResponse.builder()
                                        .token("Email Already exists")
                                        .build();
                }
                User savedUser = userRepository.save(user);
                AdminModel adminModel = new AdminModel();
                adminModel.setMobileNumber(request.getMobileNumber());
                adminModel.setUser(savedUser);
                adminModelRepository.save(adminModel);
                var jwtToken = jwtService.generateToken(user);

                return AuthenticationResponse.builder()
                                .token(jwtToken)

                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                if (request.getRole().equals("admin") && user.getRole() != Role.ADMIN) {
                        return AuthenticationResponse.builder()
                                        .token("Invalid Credentials")
                                        .build();
                }
                if (request.getRole().equals("user") && user.getRole() != Role.USER) {
                        return AuthenticationResponse.builder()
                                        .token("Invalid Credentials")
                                        .build();
                }
                var jwtToken = jwtService.generateToken(user);
                var userRole = (user.getRole() == Role.ADMIN) ? "admin" : "user";
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .userRole(userRole)
                                .build();
        }
}