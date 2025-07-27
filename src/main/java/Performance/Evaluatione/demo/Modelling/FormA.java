package Performance.Evaluatione.demo.Modelling;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "form_a")
public class FormA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateOfFirstAppointment;
    private LocalDate currentPositionDate;
    private LocalDate promotionDate;
    private String evaluationPeriod;
    private String fullname;
    @Column(unique = true)
    private String employeeIdNumber;
    private String zssfNumber;
    private String zanIdNumber;
    private String department;
    private String academicQualification;
    private String gender;
    private String phoneNo;

    @Column(unique = true)
    private String email;

    private String position;
    private String dateOfBirth;


    // Add all getters and setters manually, including for staff field

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmployeeIdNumber() {
        return employeeIdNumber;
    }

    public void setEmployeeIdNumber(String employeeIdNumber) {
        this.employeeIdNumber = employeeIdNumber;
    }

    public String getZssfNumber() {
        return zssfNumber;
    }

    public void setZssfNumber(String zssfNumber) {
        this.zssfNumber = zssfNumber;
    }

    public String getZanIdNumber() {
        return zanIdNumber;
    }

    public void setZanIdNumber(String zanIdNumber) {
        this.zanIdNumber = zanIdNumber;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAcademicQualification() {
        return academicQualification;
    }

    public void setAcademicQualification(String academicQualification) {
        this.academicQualification = academicQualification;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateOfFirstAppointment() {
        return dateOfFirstAppointment;
    }

    public void setDateOfFirstAppointment(LocalDate dateOfFirstAppointment) {
        this.dateOfFirstAppointment = dateOfFirstAppointment;
    }

    public LocalDate getCurrentPositionDate() {
        return currentPositionDate;
    }

    public void setCurrentPositionDate(LocalDate currentPositionDate) {
        this.currentPositionDate = currentPositionDate;
    }

    public LocalDate getPromotionDate() {
        return promotionDate;
    }

    public void setPromotionDate(LocalDate promotionDate) {
        this.promotionDate = promotionDate;
    }

    public String getEvaluationPeriod() {
        return evaluationPeriod;
    }

    public void setEvaluationPeriod(String evaluationPeriod) {
        this.evaluationPeriod = evaluationPeriod;
    }

}
