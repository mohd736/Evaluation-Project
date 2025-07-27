package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "recommendations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String annualSalaryIncrement;
    private String doubleSalaryOrBonus;
    private String promotion;
    private String accelerationPromotion;
    private String noAnnualIncrement;
    private String training;
    private String internalTransfer;
    private String warningLetter;
    private String demotion;
    private String jobReassignment;
    private String probationExtension;

    private String verifierName;
    private String verifierPosition;
    private String verifierDepartmentOrUnit;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAnnualSalaryIncrement() {
        return annualSalaryIncrement;
    }

    public void setAnnualSalaryIncrement(String annualSalaryIncrement) {
        this.annualSalaryIncrement = annualSalaryIncrement;
    }

    public String getDoubleSalaryOrBonus() {
        return doubleSalaryOrBonus;
    }

    public void setDoubleSalaryOrBonus(String doubleSalaryOrBonus) {
        this.doubleSalaryOrBonus = doubleSalaryOrBonus;
    }

    public String getPromotion() {
        return promotion;
    }

    public void setPromotion(String promotion) {
        this.promotion = promotion;
    }

    public String getAccelerationPromotion() {
        return accelerationPromotion;
    }

    public void setAccelerationPromotion(String accelerationPromotion) {
        this.accelerationPromotion = accelerationPromotion;
    }

    public String getNoAnnualIncrement() {
        return noAnnualIncrement;
    }

    public void setNoAnnualIncrement(String noAnnualIncrement) {
        this.noAnnualIncrement = noAnnualIncrement;
    }

    public String getTraining() {
        return training;
    }

    public void setTraining(String training) {
        this.training = training;
    }

    public String getInternalTransfer() {
        return internalTransfer;
    }

    public void setInternalTransfer(String internalTransfer) {
        this.internalTransfer = internalTransfer;
    }

    public String getWarningLetter() {
        return warningLetter;
    }

    public void setWarningLetter(String warningLetter) {
        this.warningLetter = warningLetter;
    }

    public String getDemotion() {
        return demotion;
    }

    public void setDemotion(String demotion) {
        this.demotion = demotion;
    }

    public String getJobReassignment() {
        return jobReassignment;
    }

    public void setJobReassignment(String jobReassignment) {
        this.jobReassignment = jobReassignment;
    }

    public String getProbationExtension() {
        return probationExtension;
    }

    public void setProbationExtension(String probationExtension) {
        this.probationExtension = probationExtension;
    }

    public String getVerifierName() {
        return verifierName;
    }

    public void setVerifierName(String verifierName) {
        this.verifierName = verifierName;
    }

    public String getVerifierPosition() {
        return verifierPosition;
    }

    public void setVerifierPosition(String verifierPosition) {
        this.verifierPosition = verifierPosition;
    }

    public String getVerifierDepartmentOrUnit() {
        return verifierDepartmentOrUnit;
    }

    public void setVerifierDepartmentOrUnit(String verifierDepartmentOrUnit) {
        this.verifierDepartmentOrUnit = verifierDepartmentOrUnit;
    }
}
