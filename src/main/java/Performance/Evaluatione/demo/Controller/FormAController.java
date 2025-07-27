package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormA;
import Performance.Evaluatione.demo.Repository.FormARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/form-a")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class FormAController {

    @Autowired
    private FormARepository formARepository;

    @PostMapping
    public FormA createFormA(@RequestBody FormA formA) {
        return formARepository.save(formA);
    }

    @GetMapping
    public List<FormA> getAllFormAs() {
        return formARepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<FormA> getFormAById(@PathVariable Long id) {
        return formARepository.findById(id);
    }

    @PutMapping("/{id}")
    public FormA updateFormA(@PathVariable Long id, @RequestBody FormA updatedFormA) {
        return formARepository.findById(id).map(formA -> {
            formA.setDateOfFirstAppointment(updatedFormA.getDateOfFirstAppointment());
            formA.setCurrentPositionDate(updatedFormA.getCurrentPositionDate());
            formA.setPromotionDate(updatedFormA.getPromotionDate());
            formA.setEvaluationPeriod(updatedFormA.getEvaluationPeriod());
            return formARepository.save(formA);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteFormA(@PathVariable Long id) {
        formARepository.deleteById(id);
    }
}
