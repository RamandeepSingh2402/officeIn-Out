package com.officeInOut.OfficeInOut.controller;


import com.officeInOut.OfficeInOut.model.EmployeeModel;
import com.officeInOut.OfficeInOut.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.ServerResponse;

import java.util.NoSuchElementException;

import static org.springframework.web.servlet.function.ServerResponse.status;

@CrossOrigin
@RestController
@RequestMapping("")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getAll")
    public String getAllEmployees(){
        return "This would be the list of all the employees";
    }

    @GetMapping("employee/{emailId}")
    public String getUserByEmailId(@PathVariable("emailId") String emailId)
    {
//        EmployeeModel employee = employeeService.getEmployeeByEmailId(emailId);
        try {
            return employeeService.getEmployeeByEmailId(emailId).getFirstName();
        }
        catch (NullPointerException e){
            return null;
        }
    }

    @PostMapping(path = "/signup", consumes="application/json", produces = "application/json")
    public EmployeeModel addEmployee(@RequestBody EmployeeModel employee){
        try {
            return employeeService.addEmployee(employee);
        }
        catch (NoSuchElementException e){
            return null;
        }
    }
}
