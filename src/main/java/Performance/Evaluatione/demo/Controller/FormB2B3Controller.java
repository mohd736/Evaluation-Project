package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.FormB2B3;
import Performance.Evaluatione.demo.Services.FormB2B3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/formB2B3")
@CrossOrigin(origins = "*")
public class FormB2B3Controller {
    @Autowired
    private FormB2B3Service service;

    @PostMapping
    public FormB2B3 create(@RequestBody FormB2B3 form) {
        return service.save(form);
    }

    @GetMapping
    public List<FormB2B3> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<FormB2B3> getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public FormB2B3 update(@PathVariable Long id, @RequestBody FormB2B3 form) {
        return service.update(id, form);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
