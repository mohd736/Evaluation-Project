package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.FormB4;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FormB4Repository extends JpaRepository<FormB4, Long> {
    Optional<FormB4> findByFormA_Id(Long formAId);
}
