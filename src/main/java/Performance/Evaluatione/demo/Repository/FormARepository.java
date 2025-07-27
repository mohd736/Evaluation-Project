package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.FormA;
import Performance.Evaluatione.demo.Modelling.FormB2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FormARepository extends JpaRepository<FormA, Long> {
    Optional<FormA> findById(Long id);

}
