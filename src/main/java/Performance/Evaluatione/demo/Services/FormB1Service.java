package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormB1;
import Performance.Evaluatione.demo.Repository.FormB1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormB1Service {

    @Autowired
    private FormB1Repository formB1Repository;

    public List<FormB1> getAllFormB1() {
        return formB1Repository.findAll();
    }

    public Optional<FormB1> getFormB1ById(Long id) {
        return formB1Repository.findById(id);
    }

    public FormB1 saveFormB1(FormB1 formB1) {
        return formB1Repository.save(formB1);
    }

    public FormB1 updateFormB1(Long id, FormB1 updatedFormB1) {
        return formB1Repository.findById(id).map(formB1 -> {
            formB1.setDutyPerformed(updatedFormB1.getDutyPerformed());
            formB1.setPerformanceIndicator(updatedFormB1.getPerformanceIndicator());
            formB1.setTarget(updatedFormB1.getTarget());
            formB1.setActualPerformance(updatedFormB1.getActualPerformance());
            formB1.setStaffScore(updatedFormB1.getStaffScore());
            formB1.setEvaluatorScore(updatedFormB1.getEvaluatorScore());
            formB1.setPerformanceDescription(updatedFormB1.getPerformanceDescription());
            formB1.setAgreedScore(updatedFormB1.getAgreedScore());
            formB1.setAverageScoreB1(updatedFormB1.getAverageScoreB1());
            formB1.setFormA(updatedFormB1.getFormA());
            return formB1Repository.save(formB1);
        }).orElseThrow(() -> new RuntimeException("FormB1 not found with id: " + id));
    }

    public void deleteFormB1(Long id) {
        formB1Repository.deleteById(id);
    }
}
