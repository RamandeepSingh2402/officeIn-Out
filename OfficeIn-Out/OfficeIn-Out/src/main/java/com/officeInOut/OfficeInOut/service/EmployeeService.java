package com.officeInOut.OfficeInOut.service;

import com.officeInOut.OfficeInOut.model.EmployeeModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {

    public List<EmployeeModel> getAllEmployees();

    public EmployeeModel addEmployee(EmployeeModel employeeModel);

    public EmployeeModel getEmployeeById(int employeeId);

    public EmployeeModel getEmployeeByEmailId(String emailId);

}
