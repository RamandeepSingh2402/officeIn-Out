package com.officeInOut.OfficeInOut.repository;

import com.officeInOut.OfficeInOut.model.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<EmployeeModel, Integer> {
//    Optional<EmployeeModel> findByEmailId(String emailId);
//    Optional<EmployeeModel> findByEmailId(String emailId);
//    Optional<EmployeeModel> findByEmailId(String emailId);
//    @Query("select u from EmployeeModel u where u.emailId = :emailId")
//    Optional<EmployeeModel> login(@Param(value="emailId") String emailId, @Param(value="password") String password);

//    Optional<EmployeeModel> findBytoken(String token);

}
