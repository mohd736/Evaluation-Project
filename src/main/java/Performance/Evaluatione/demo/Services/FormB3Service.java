package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormB3;
import Performance.Evaluatione.demo.Repository.FormB3Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormB3Service {

    @Autowired
    private FormB3Repository formB3Repository;

    public List<FormB3> getAllFormB3() {
        return formB3Repository.findAll();
    }

    public Optional<FormB3> getFormB3ById(Long id) {
        return formB3Repository.findById(id);
    }

    public FormB3 updateFormB3(Long id, FormB3 updatedFormB3) {
        return formB3Repository.findById(id).map(formB3 -> {
            formB3.setLevel(updatedFormB3.getLevel());
            formB3.setAttribute(updatedFormB3.getAttribute());
            formB3.setStaffScore(updatedFormB3.getStaffScore());
            formB3.setEvaluatorScore(updatedFormB3.getEvaluatorScore());
            formB3.setAgreedScore(updatedFormB3.getAgreedScore());
            formB3.setDescription(updatedFormB3.getDescription());
            formB3.setAverageScoreB3(updatedFormB3.getAverageScoreB3());
//            formB3.setFormA(updatedFormB3.getFormA());
            return formB3Repository.save(formB3);
        }).orElseThrow(() -> new RuntimeException("FormB3 not found with id: " + id));
    }

    public void deleteFormB3(Long id) {
        formB3Repository.deleteById(id);
    }

    public FormB3 saveFormB3(FormB3 formB3) {
        return formB3Repository.save(formB3);
    }
}
