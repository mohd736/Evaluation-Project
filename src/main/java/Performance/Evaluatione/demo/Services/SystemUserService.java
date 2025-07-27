package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.SystemUser;
import Performance.Evaluatione.demo.Repository.SystemUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class SystemUserService {
    @Autowired
    private SystemUserRepository userRepository;

    public SystemUser registerUser(SystemUser user) {
        return userRepository.save(user);
    }

    public Optional<SystemUser> login(String email, String rawPassword) {
        Optional<SystemUser> user = userRepository.findByEmail(email);

        // Check if user is present and password matches
        if (user.isPresent()) {
            SystemUser foundUser = user.get();
            if (foundUser.getPassword() != null && foundUser.getPassword().equals(rawPassword)) {
                return Optional.of(foundUser);
            }
        }

        return Optional.empty();
    }

    public Optional<SystemUser> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
