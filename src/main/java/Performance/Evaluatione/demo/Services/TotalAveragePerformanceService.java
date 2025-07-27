package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.TotalAveragePerformance;
import Performance.Evaluatione.demo.Repository.TotalAveragePerformanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TotalAveragePerformanceService {


    @Autowired
    private TotalAveragePerformanceRepository repository;

    public TotalAveragePerformance save(TotalAveragePerformance performance) {
        return repository.save(performance);
    }

    public List<TotalAveragePerformance> getAll() {
        return repository.findAll();
    }

    public Optional<TotalAveragePerformance> getById(Long id) {
        return repository.findById(id);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public TotalAveragePerformance update(Long id, TotalAveragePerformance updated) {
        return repository.findById(id).map(existing -> {
            existing.setFormId(updated.getFormId());
            existing.setRemark(updated.getRemark());
            existing.setPosition(updated.getPosition());
            return repository.save(existing);
        }).orElse(null);
    }
}
