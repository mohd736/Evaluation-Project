package Performance.Evaluatione.demo.Services;

import Performance.Evaluatione.demo.Modelling.DVCApproval;
import Performance.Evaluatione.demo.Repository.DVCApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DVCApprovalService {
    @Autowired
    private DVCApprovalRepository repository;

    public DVCApproval saveApproval(DVCApproval approval) {
        return repository.save(approval);
    }

    public Optional<DVCApproval> getApprovalById(Long id) {
        return repository.findById(id);
    }

    public List<DVCApproval> getAllApprovals() {
        return repository.findAll();
    }

    public void deleteApproval(Long id) {
        repository.deleteById(id);
    }

}
