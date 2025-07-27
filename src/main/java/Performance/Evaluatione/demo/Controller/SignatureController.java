package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.Signature;
import Performance.Evaluatione.demo.Services.SignatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/signature")
@CrossOrigin(origins = "*")
public class SignatureController {
    @Autowired
    private SignatureService signatureService;

    @PostMapping
    public Signature createSignature(@RequestBody Signature signature) {
        return signatureService.saveSignature(signature);
    }

    @GetMapping
    public List<Signature> getAllSignatures() {
        return signatureService.getAllSignatures();
    }

    @GetMapping("/{id}")
    public Optional<Signature> getSignatureById(@PathVariable Long id) {
        return signatureService.getSignatureById(id);
    }

    @PutMapping("/{id}")
    public Signature updateSignature(@PathVariable Long id, @RequestBody Signature signature) {
        return signatureService.updateSignature(id, signature);
    }

    @DeleteMapping("/{id}")
    public void deleteSignature(@PathVariable Long id) {
        signatureService.deleteSignature(id);
    }
}
