package blowout.blowout.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import blowout.blowout.Service.AuthenticationService;
import blowout.blowout.dto.AuthenticationRequest;
import blowout.blowout.dto.AuthenticationResponse;
import blowout.blowout.dto.RegisterRequest;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:5173/")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;
    
    @Tag(name = "Register new user", description = "To create a new account")
    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @Tag(name = "Authenticate user", description = "To login to existing registered account")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        System.out.println(request.toString());
        request.setRole("user");
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
