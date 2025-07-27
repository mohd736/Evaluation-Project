package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.RecommendationApproval;
import Performance.Evaluatione.demo.Repository.RecommendationApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RecommendationApprovalService {
    @Autowired
    private RecommendationApprovalRepository repository;

    public RecommendationApproval save(RecommendationApproval approval) {
        return repository.save(approval);
    }

    public List<RecommendationApproval> findAll() {
        return repository.findAll();
    }

    public Optional<RecommendationApproval> findById(Long id) {
        return repository.findById(id);
    }

}
