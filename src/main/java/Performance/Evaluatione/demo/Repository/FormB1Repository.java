package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.FormB1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormB1Repository extends JpaRepository<FormB1, Long> {
    List<FormB1> findByFormA_Id(Long formAId);
}

