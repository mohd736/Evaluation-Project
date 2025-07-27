package Performance.Evaluatione.demo.Repository;

import Performance.Evaluatione.demo.Modelling.FormB2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormB2Repository extends JpaRepository<FormB2, Long> {
    List<FormB2> findByFormA_Id(Long formAId);
}

