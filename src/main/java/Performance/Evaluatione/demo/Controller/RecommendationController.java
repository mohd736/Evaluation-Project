package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.Recommendation;
import Performance.Evaluatione.demo.Repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin(origins = "http://localhost:3000")
public class RecommendationController {

    @Autowired
    private RecommendationRepository repository;

    @PostMapping
    public Recommendation create(@RequestBody Recommendation recommendation) {
        return repository.save(recommendation);
    }

    @GetMapping
    public List<Recommendation> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recommendation> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
