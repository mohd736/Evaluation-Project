package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormB3;
import Performance.Evaluatione.demo.Services.FormB3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/form-b3")
@CrossOrigin(origins = "http://localhost:3000") // Change this as needed
public class FormB3Controller {

    @Autowired
    private FormB3Service formB3Service;

    @GetMapping
    public ResponseEntity<List<FormB3>> getAllFormB3() {
        return ResponseEntity.ok(formB3Service.getAllFormB3());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormB3> getFormB3ById(@PathVariable Long id) {
        return formB3Service.getFormB3ById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FormB3> saveFormB3(@RequestBody FormB3 formB3) {
        FormB3 saved = formB3Service.saveFormB3(formB3);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormB3> updateFormB3(@PathVariable Long id, @RequestBody FormB3 formB3) {
        try {
            FormB3 updatedForm = formB3Service.updateFormB3(id, formB3);
            return ResponseEntity.ok(updatedForm);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormB3(@PathVariable Long id) {
        formB3Service.deleteFormB3(id);
        return ResponseEntity.noContent().build();
    }
}
