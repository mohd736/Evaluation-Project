package Performance.Evaluatione.demo.Controller;

import Performance.Evaluatione.demo.Modelling.DVCApproval;
import Performance.Evaluatione.demo.Services.DVCApprovalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dvc-approvals")
@CrossOrigin(origins = "*")
public class DVCApprovalController {
    @Autowired
    private DVCApprovalService service;

    @PostMapping
    public ResponseEntity<DVCApproval> createApproval(@RequestBody DVCApproval approval) {
        return ResponseEntity.ok(service.saveApproval(approval));
    }

    @GetMapping
    public ResponseEntity<List<DVCApproval>> getAllApprovals() {
        return ResponseEntity.ok(service.getAllApprovals());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DVCApproval> getApprovalById(@PathVariable Long id) {
        return service.getApprovalById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**@PutMapping("/{id}")
    public ResponseEntity<DVCApproval> updateApproval(@PathVariable Long id, @RequestBody DVCApproval approval) {
        return service.getApprovalById(id)
                .map(existing -> {
                    approval.setId(id);
                    return ResponseEntity.ok(service.saveApproval(approval));
                })
                .orElse(ResponseEntity.notFound().build());
    }*/

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApproval(@PathVariable Long id) {
        if (service.getApprovalById(id).isPresent()) {
            service.deleteApproval(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
