package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.RecommendationApproval;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationApprovalRepository extends JpaRepository<RecommendationApproval, Long> {
}
