package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "recommendation_approval")
public class RecommendationApproval {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean agreed;

    private String reasonForDisagreement;

    private String newRecommendation;

    private String supervisorName;

    private String supervisorTitle;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAgreed() {
        return agreed;
    }

    public void setAgreed(boolean agreed) {
        this.agreed = agreed;
    }

    public String getReasonForDisagreement() {
        return reasonForDisagreement;
    }

    public void setReasonForDisagreement(String reasonForDisagreement) {
        this.reasonForDisagreement = reasonForDisagreement;
    }

    public String getNewRecommendation() {
        return newRecommendation;
    }

    public void setNewRecommendation(String newRecommendation) {
        this.newRecommendation = newRecommendation;
    }

    public String getSupervisorName() {
        return supervisorName;
    }

    public void setSupervisorName(String supervisorName) {
        this.supervisorName = supervisorName;
    }

    public String getSupervisorTitle() {
        return supervisorTitle;
    }

    public void setSupervisorTitle(String supervisorTitle) {
        this.supervisorTitle = supervisorTitle;
    }
}
