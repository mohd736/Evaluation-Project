package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;

@Entity
@Table(name = "form_b2")
public class FormB2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String level;
    private String attribute;

    private double staffScore;
    private double evaluatorScore;
    private double agreedScore;

    @Column(columnDefinition = "TEXT")
    private String remarks;
    private Double averageScoreB2;


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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getAttribute() {
        return attribute;
    }

    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }

    public double getStaffScore() {
        return staffScore;
    }

    public void setStaffScore(double staffScore) {
        this.staffScore = staffScore;
    }

    public double getEvaluatorScore() {
        return evaluatorScore;
    }

    public void setEvaluatorScore(double evaluatorScore) {
        this.evaluatorScore = evaluatorScore;
    }

    public double getAgreedScore() {
        return agreedScore;
    }

    public void setAgreedScore(double agreedScore) {
        this.agreedScore = agreedScore;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Double getAverageScoreB2() {
        return averageScoreB2;
    }

    public void setAverageScoreB2(Double averageScoreB2) {
        this.averageScoreB2 = averageScoreB2;
    }
}
