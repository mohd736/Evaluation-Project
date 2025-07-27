package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.DVCApproval;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DVCApprovalRepository extends JpaRepository<DVCApproval, Long> {
}
