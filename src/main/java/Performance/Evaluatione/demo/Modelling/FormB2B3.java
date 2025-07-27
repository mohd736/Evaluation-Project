package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "form_b2b3")

@NoArgsConstructor
@AllArgsConstructor
public class FormB2B3 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String evaluationItem;

    @Column(columnDefinition = "TEXT")
    private String evaluationDescription;

    private String characteristicQuality;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEvaluationItem() {
        return evaluationItem;
    }

    public void setEvaluationItem(String evaluationItem) {
        this.evaluationItem = evaluationItem;
    }

    public String getEvaluationDescription() {
        return evaluationDescription;
    }

    public void setEvaluationDescription(String evaluationDescription) {
        this.evaluationDescription = evaluationDescription;
    }

    public String getCharacteristicQuality() {
        return characteristicQuality;
    }

    public void setCharacteristicQuality(String characteristicQuality) {
        this.characteristicQuality = characteristicQuality;
    }
}
