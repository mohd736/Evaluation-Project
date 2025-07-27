package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.RecommendationApproval;
import Performance.Evaluatione.demo.Repository.RecommendationApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendation-approvals")
public class RecommendationApprovalController {
    @Autowired
    private RecommendationApprovalRepository repository;

    @PostMapping
    public RecommendationApproval create(@RequestBody RecommendationApproval approval) {
        return repository.save(approval);
    }

    @GetMapping
    public List<RecommendationApproval> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecommendationApproval> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
