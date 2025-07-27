package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.FormB3;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FormB3Repository extends JpaRepository<FormB3, Long> {
    List<FormB3> findByFormA_Id(Long formAId);

    // Optional<FormB3> findByFormA_Id(Long formAId);  // hii epuka kama unataka list
}
