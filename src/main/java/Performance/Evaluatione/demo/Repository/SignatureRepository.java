package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.Signature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignatureRepository extends JpaRepository<Signature, Long> {
}
