package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "dvc_approval")
public class DVCApproval {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String formB1;

    @Column(columnDefinition = "TEXT")
    private String formB2;

    @Column(columnDefinition = "TEXT")
    private String formB3;

    @Column(columnDefinition = "TEXT")
    private String formB4;

    @Column(columnDefinition = "TEXT")
    private String reasonOfDisagree;

    @Column(columnDefinition = "TEXT")
    private String newRecommendation;

    private boolean recommendation; // yes or no

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFormB1() {
        return formB1;
    }

    public void setFormB1(String formB1) {
        this.formB1 = formB1;
    }

    public String getFormB2() {
        return formB2;
    }

    public void setFormB2(String formB2) {
        this.formB2 = formB2;
    }

    public String getFormB3() {
        return formB3;
    }

    public void setFormB3(String formB3) {
        this.formB3 = formB3;
    }

    public String getFormB4() {
        return formB4;
    }

    public void setFormB4(String formB4) {
        this.formB4 = formB4;
    }

    public String getReasonOfDisagree() {
        return reasonOfDisagree;
    }

    public void setReasonOfDisagree(String reasonOfDisagree) {
        this.reasonOfDisagree = reasonOfDisagree;
    }

    public String getNewRecommendation() {
        return newRecommendation;
    }

    public void setNewRecommendation(String newRecommendation) {
        this.newRecommendation = newRecommendation;
    }

    public boolean isRecommendation() {
        return recommendation;
    }

    public void setRecommendation(boolean recommendation) {
        this.recommendation = recommendation;
    }
}
