package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.TotalAveragePerformance;
import Performance.Evaluatione.demo.Services.TotalAveragePerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/total-average-performance")
@CrossOrigin(origins = "*")
public class TotalAveragePerformanceController {
    @Autowired
    private TotalAveragePerformanceService service;

    @PostMapping
    public TotalAveragePerformance create(@RequestBody TotalAveragePerformance performance) {
        return service.save(performance);
    }

    @GetMapping
    public List<TotalAveragePerformance> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<TotalAveragePerformance> getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public TotalAveragePerformance update(@PathVariable Long id, @RequestBody TotalAveragePerformance performance) {
        return service.update(id, performance);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
