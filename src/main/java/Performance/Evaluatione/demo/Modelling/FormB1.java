package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "form_b1")
@NoArgsConstructor
@AllArgsConstructor
public class FormB1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String dutyPerformed;
    private String performanceIndicator;
    private String target;
    private String actualPerformance;

    private  Double staffScore;

    private  Double evaluatorScore;

    private String performanceDescription;

    @Column(name = "agreedScore")
    private Double agreedScore;

    private double averageScoreB1;
    @ManyToOne
    @JoinColumn(name = "form_a_id")
    private FormA formA;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDutyPerformed() {
        return dutyPerformed;
    }

    public void setDutyPerformed(String dutyPerformed) {
        this.dutyPerformed = dutyPerformed;
    }

    public String getPerformanceIndicator() {
        return performanceIndicator;
    }

    public void setPerformanceIndicator(String performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getActualPerformance() {
        return actualPerformance;
    }

    public void setActualPerformance(String actualPerformance) {
        this.actualPerformance = actualPerformance;
    }

    public Double getPerformerScore() {
        return staffScore;
    }

    public void setPerformerScore(Double performerScore) {
        this.staffScore = performerScore;
    }

    public Double getEvaluatorScore() {
        return evaluatorScore;
    }

    public void setEvaluatorScore(Double evaluatorScore) {
        this.evaluatorScore = evaluatorScore;
    }


    public void setB1score(Double b1score) {
        this.agreedScore = b1score;
    }

    public String getPerformanceDescription() {
        return performanceDescription;
    }

    public void setPerformanceDescription(String performanceDescription) {
        this.performanceDescription = performanceDescription;
    }

    public double getB1score() {
        return agreedScore;
    }

    public void setB1score(double b1score) {
        this.agreedScore = b1score;
    }

    public FormA getFormA() {
        return formA;
    }

    public Double getStaffScore() {
        return staffScore;
    }

    public void setStaffScore(Double staffScore) {
        this.staffScore = staffScore;
    }

    public Double getAgreedScore() {
        return agreedScore;
    }

    public void setAgreedScore(Double agreedScore) {
        this.agreedScore = agreedScore;
    }

    public Double getAverageScoreB1() {
        return averageScoreB1;
    }

    public void setAverageScoreB1(Double averageScoreB1) {
        this.averageScoreB1 = averageScoreB1;
    }

    public void setFormA(FormA formA) {
        this.formA = formA;
    }
}
