package com.demo.Repository;

import com.demo.Model.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Long> {
    UserRegistration findByFullnameAndPassword(String fullname, String password);
}
