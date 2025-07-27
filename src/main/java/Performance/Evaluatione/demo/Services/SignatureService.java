package Performance.Evaluatione.demo.Services;


import Performance.Evaluatione.demo.Modelling.Signature;
import Performance.Evaluatione.demo.Repository.SignatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SignatureService {
    @Autowired
    private SignatureRepository signatureRepository;

    public Signature saveSignature(Signature signature) {
        return signatureRepository.save(signature);
    }

    public List<Signature> getAllSignatures() {
        return signatureRepository.findAll();
    }

    public Optional<Signature> getSignatureById(Long id) {
        return signatureRepository.findById(id);
    }

    public void deleteSignature(Long id) {
        signatureRepository.deleteById(id);
    }

    public Signature updateSignature(Long id, Signature updatedSignature) {
        return signatureRepository.findById(id).map(existing -> {
            existing.setFormId(updatedSignature.getFormId());
            existing.setDate(updatedSignature.getDate());
            existing.setSignature(updatedSignature.getSignature());
            existing.setPosition(updatedSignature.getPosition());
            return signatureRepository.save(existing);
        }).orElse(null);
    }
}
