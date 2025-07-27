package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.TotalAveragePerformance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TotalAveragePerformanceRepository extends JpaRepository<TotalAveragePerformance, Long> {
}
