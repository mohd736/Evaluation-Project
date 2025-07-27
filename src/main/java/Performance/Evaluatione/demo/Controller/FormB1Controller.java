package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormB1;
import Performance.Evaluatione.demo.Services.FormB1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/form-b1")
@CrossOrigin(origins = "http://localhost:3000")
public class FormB1Controller {

    @Autowired
    private FormB1Service formB1Service;

    @GetMapping
    public ResponseEntity<List<FormB1>> getAllFormB1() {
        return ResponseEntity.ok(formB1Service.getAllFormB1());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormB1> getFormB1ById(@PathVariable Long id) {
        return formB1Service.getFormB1ById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FormB1> saveFormB1(@RequestBody FormB1 formB1) {
        FormB1 savedForm = formB1Service.saveFormB1(formB1);
        return ResponseEntity.ok(savedForm);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormB1> updateFormB1(@PathVariable Long id, @RequestBody FormB1 formB1) {
        try {
            FormB1 updatedForm = formB1Service.updateFormB1(id, formB1);
            return ResponseEntity.ok(updatedForm);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormB1(@PathVariable Long id) {
        formB1Service.deleteFormB1(id);
        return ResponseEntity.noContent().build();
    }
}