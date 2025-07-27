package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.Recommendation;
import Performance.Evaluatione.demo.Repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository repository;

    public Recommendation saveRecommendation(Recommendation recommendation) {
        return repository.save(recommendation);
    }

    public List<Recommendation> getAllRecommendations() {
        return repository.findAll();
    }

    public Optional<Recommendation> getRecommendationById(Long id) {
        return repository.findById(id);
    }

    public Recommendation updateRecommendation(Long id, Recommendation updatedRecommendation) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setAnnualSalaryIncrement(updatedRecommendation.getAnnualSalaryIncrement());
                    existing.setDoubleSalaryOrBonus(updatedRecommendation.getDoubleSalaryOrBonus());
                    existing.setPromotion(updatedRecommendation.getPromotion());
                    existing.setAccelerationPromotion(updatedRecommendation.getAccelerationPromotion());
                    existing.setNoAnnualIncrement(updatedRecommendation.getNoAnnualIncrement());
                    existing.setTraining(updatedRecommendation.getTraining());
                    existing.setInternalTransfer(updatedRecommendation.getInternalTransfer());
                    existing.setWarningLetter(updatedRecommendation.getWarningLetter());
                    existing.setDemotion(updatedRecommendation.getDemotion());
                    existing.setJobReassignment(updatedRecommendation.getJobReassignment());
                    existing.setProbationExtension(updatedRecommendation.getProbationExtension());
                    existing.setVerifierName(updatedRecommendation.getVerifierName());
                    existing.setVerifierPosition(updatedRecommendation.getVerifierPosition());
                    existing.setVerifierDepartmentOrUnit(updatedRecommendation.getVerifierDepartmentOrUnit());
                    return repository.save(existing);
                }).orElseGet(() -> {
                    updatedRecommendation.setId(id);
                    return repository.save(updatedRecommendation);
                });
    }

    public boolean deleteRecommendation(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
