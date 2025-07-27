package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormB2;
import Performance.Evaluatione.demo.Repository.FormB2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormB2Service {

    @Autowired
    private FormB2Repository formB2Repository;

    public List<FormB2> getAllFormB2() {
        return formB2Repository.findAll();
    }

    public Optional<FormB2> getFormB2ById(Long id) {
        return formB2Repository.findById(id);
    }

    public FormB2 updateFormB2(Long id, FormB2 updatedFormB2) {
        return formB2Repository.findById(id).map(formB2 -> {
            formB2.setLevel(updatedFormB2.getLevel());
            formB2.setAttribute(updatedFormB2.getAttribute());
            formB2.setStaffScore(updatedFormB2.getStaffScore());
            formB2.setEvaluatorScore(updatedFormB2.getEvaluatorScore());
            formB2.setAgreedScore(updatedFormB2.getAgreedScore());
            formB2.setRemarks(updatedFormB2.getRemarks());
            formB2.setAverageScoreB2(updatedFormB2.getAverageScoreB2());
//            formB2.setFormA(updatedFormB2.getFormA());
            return formB2Repository.save(formB2);
        }).orElseThrow(() -> new RuntimeException("FormB2 not found with id: " + id));
    }

    public void deleteFormB2(Long id) {
        formB2Repository.deleteById(id);
    }

    public FormB2 saveFormB2(FormB2 formB2) {
        return formB2Repository.save(formB2);
    }

}
