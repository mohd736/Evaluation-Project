package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.SystemUser;
import Performance.Evaluatione.demo.Services.SystemUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("/api/SystemUser")
@CrossOrigin(origins = "*")
public class SystemUserController {
    @Autowired
    private SystemUserService userService;

    @PostMapping("/register")
    public ResponseEntity<SystemUser> register(@RequestBody SystemUser user) {
        SystemUser saved = userService.registerUser(user);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<SystemUser> user = userService.login(request.getEmail(), request.getPassword());
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    static class LoginRequest {
        private String email;
        private String password;

        // Getters and Setters
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
}
