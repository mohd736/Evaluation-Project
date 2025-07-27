package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormB2;
import Performance.Evaluatione.demo.Services.FormB2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/form-b2")
@CrossOrigin(origins = "http://localhost:3000") // Change to your frontend URL
public class FormB2Controller {

    @Autowired
    private FormB2Service formB2Service;

    @GetMapping
    public ResponseEntity<List<FormB2>> getAllFormB2() {
        return ResponseEntity.ok(formB2Service.getAllFormB2());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormB2> getFormB2ById(@PathVariable Long id) {
        return formB2Service.getFormB2ById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FormB2> saveFormB2(@RequestBody FormB2 formB2) {
        FormB2 saved = formB2Service.saveFormB2(formB2);
        return ResponseEntity.ok(saved);
    }


    @PutMapping("/{id}")
    public ResponseEntity<FormB2> updateFormB2(@PathVariable Long id, @RequestBody FormB2 formB2) {
        try {
            FormB2 updatedForm = formB2Service.updateFormB2(id, formB2);
            return ResponseEntity.ok(updatedForm);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormB2(@PathVariable Long id) {
        formB2Service.deleteFormB2(id);
        return ResponseEntity.noContent().build();
    }
}
