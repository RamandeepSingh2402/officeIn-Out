package com.officeInOut.OfficeInOut.model;

import javax.persistence.*;

@Entity
public class EmployeeModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeId;
    private String firstName;
    private String lastName;
    private String emailId;
    private String workingLocation;

    public EmployeeModel(String firstName, String lastName, String emailId, String workingLocation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.workingLocation = workingLocation;
    }
    public EmployeeModel(){

    }

    public EmployeeModel(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getWorkingLocation() {
        return workingLocation;
    }

    public void setWorkingLocation(String workingLocation) {
        this.workingLocation = workingLocation;
    }
}
