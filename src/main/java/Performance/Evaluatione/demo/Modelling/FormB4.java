package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "form_b4")
public class FormB4 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String averageScoreB1;
    private String averageScoreB2;
    private String averageScoreB3;
    private String averageScoreB4;
    private String employeeSignature;
    private String confirmationDate;

    @ManyToOne
    @JoinColumn(name = "form_a_id", referencedColumnName = "id")
    private FormA formA;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAverageScoreB1() {
        return averageScoreB1;
    }

    public void setAverageScoreB1(String averageScoreB1) {
        this.averageScoreB1 = averageScoreB1;
    }

    public String getAverageScoreB2() {
        return averageScoreB2;
    }

    public void setAverageScoreB2(String averageScoreB2) {
        this.averageScoreB2 = averageScoreB2;
    }

    public String getAverageScoreB3() {
        return averageScoreB3;
    }

    public void setAverageScoreB3(String averageScoreB3) {
        this.averageScoreB3 = averageScoreB3;
    }

    public String getAverageScoreB4() {
        return averageScoreB4;
    }

    public void setAverageScoreB4(String averageScoreB4) {
        this.averageScoreB4 = averageScoreB4;
    }

    public String getEmployeeSignature() {
        return employeeSignature;
    }

    public void setEmployeeSignature(String employeeSignature) {
        this.employeeSignature = employeeSignature;
    }

    public String getConfirmationDate() {
        return confirmationDate;
    }

    public void setConfirmationDate(String confirmationDate) {
        this.confirmationDate = confirmationDate;
    }

    public FormA getFormA() {
        return formA;
    }

    public void setFormA(FormA formA) {
        this.formA = formA;
    }
}
