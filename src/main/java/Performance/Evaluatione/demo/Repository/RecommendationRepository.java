package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
}
