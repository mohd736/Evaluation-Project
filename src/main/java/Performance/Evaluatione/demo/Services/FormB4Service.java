package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormB4;
import Performance.Evaluatione.demo.Repository.FormB4Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormB4Service {

    @Autowired
    private FormB4Repository formB4Repository;

    public List<FormB4> getAllFormB4() {
        return formB4Repository.findAll();
    }

    public Optional<FormB4> getFormB4ById(Long id) {
        return formB4Repository.findById(id);
    }

    public FormB4 updateFormB4(Long id, FormB4 updatedFormB4) {
        return formB4Repository.findById(id).map(formB4 -> {
            formB4.setAverageScoreB1(updatedFormB4.getAverageScoreB1());
            formB4.setAverageScoreB2(updatedFormB4.getAverageScoreB2());
            formB4.setAverageScoreB3(updatedFormB4.getAverageScoreB3());
            formB4.setAverageScoreB4(updatedFormB4.getAverageScoreB4());
            formB4.setEmployeeSignature(updatedFormB4.getEmployeeSignature());
            formB4.setConfirmationDate(updatedFormB4.getConfirmationDate());
            formB4.setFormA(updatedFormB4.getFormA());
            return formB4Repository.save(formB4);
        }).orElseThrow(() -> new RuntimeException("FormB4 not found with id: " + id));
    }

    public void deleteFormB4(Long id) {
        formB4Repository.deleteById(id);
    }
}
