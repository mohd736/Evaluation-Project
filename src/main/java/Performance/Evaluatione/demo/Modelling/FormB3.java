package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;

@Entity
@Table(name = "form_b3")
public class FormB3 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String level;
    private String attribute;

    private double staffScore;
    private double evaluatorScore;
    private double agreedScore;

    private String description;

    private Double averageScoreB3;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAverageScoreB3() {
        return averageScoreB3;
    }

    public void setAverageScoreB3(Double averageScoreB3) {
        this.averageScoreB3 = averageScoreB3;
    }
}
