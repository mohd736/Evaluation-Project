package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormB2B3;
import Performance.Evaluatione.demo.Repository.FormB2B3Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormB2B3Service {
    @Autowired
    private FormB2B3Repository repository;

    public FormB2B3 save(FormB2B3 form) {
        return repository.save(form);
    }

    public List<FormB2B3> getAll() {
        return repository.findAll();
    }

    public Optional<FormB2B3> getById(Long id) {
        return repository.findById(id);
    }

    public FormB2B3 update(Long id, FormB2B3 updated) {
        return repository.findById(id).map(existing -> {
            existing.setEmail(updated.getEmail());
            existing.setEvaluationItem(updated.getEvaluationItem());
            existing.setEvaluationDescription(updated.getEvaluationDescription());
            existing.setCharacteristicQuality(updated.getCharacteristicQuality());
            return repository.save(existing);
        }).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
