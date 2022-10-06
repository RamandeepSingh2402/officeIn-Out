package com.officeInOut.OfficeInOut.service;

import com.officeInOut.OfficeInOut.model.EmployeeModel;
import com.officeInOut.OfficeInOut.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeModel> getAllEmployees(){
        return employeeRepository.findAll();
    }


    @Override
    public EmployeeModel addEmployee(EmployeeModel employeeModel) throws NoSuchElementException {
        if(employeeRepository.existsById(employeeModel.getEmployeeId())){
            throw new NoSuchElementException();
        }

        return employeeRepository.save(employeeModel);
    }

    @Override
    public EmployeeModel getEmployeeByEmployeeId(int employeeId) {
        return null;
    }

    @Override
    public EmployeeModel getEmployeeByEmailId(String emailId) {
        return null;
    }

//    @Override
//    public EmployeeModel getUserByEmailId(String emailId){
//        EmployeeModel employee = null;
//        Optional<EmployeeModel> optionalEmployee = employeeRepository.findByEmailId(emailId);
//        if(optionalEmployee.isPresent()){
//            employee = optionalEmployee.get();
//        }
//        return employee;
//    }
}
