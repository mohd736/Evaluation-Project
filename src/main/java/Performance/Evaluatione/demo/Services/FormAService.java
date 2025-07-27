package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.FormA;
import Performance.Evaluatione.demo.Repository.FormARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormAService {
    @Autowired
    private FormARepository formARepository;

    public FormA saveFormA(FormA formA) {
        return formARepository.save(formA);
    }

    public List<FormA> getAllFormAs() {
        return formARepository.findAll();
    }

    public Optional<FormA> getFormAById(Long id) {
        return formARepository.findById(id);
    }

    public void deleteFormA(Long id) {
        formARepository.deleteById(id);
    }

    public FormA updateFormA(Long id, FormA updatedFormA) {
        return formARepository.findById(id).map(existingFormA -> {
            existingFormA.setDateOfFirstAppointment(updatedFormA.getDateOfFirstAppointment());
            existingFormA.setCurrentPositionDate(updatedFormA.getCurrentPositionDate());
            existingFormA.setPromotionDate(updatedFormA.getPromotionDate());
            existingFormA.setEvaluationPeriod(updatedFormA.getEvaluationPeriod());
            return formARepository.save(existingFormA);
        }).orElse(null);
    }

}
