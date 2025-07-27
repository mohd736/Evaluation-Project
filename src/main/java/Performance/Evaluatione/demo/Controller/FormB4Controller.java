package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormB4;
import Performance.Evaluatione.demo.Services.FormB4Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/form-b4")
@CrossOrigin(origins = "http://localhost:3000") // Modify as needed
public class FormB4Controller {

    @Autowired
    private FormB4Service formB4Service;

    @GetMapping
    public ResponseEntity<List<FormB4>> getAllFormB4() {
        return ResponseEntity.ok(formB4Service.getAllFormB4());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormB4> getFormB4ById(@PathVariable Long id) {
        return formB4Service.getFormB4ById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormB4> updateFormB4(@PathVariable Long id, @RequestBody FormB4 formB4) {
        try {
            FormB4 updatedForm = formB4Service.updateFormB4(id, formB4);
            return ResponseEntity.ok(updatedForm);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormB4(@PathVariable Long id) {
        formB4Service.deleteFormB4(id);
        return ResponseEntity.noContent().build();
    }
}
