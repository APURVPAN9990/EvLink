package com.demo.Repository;


import com.demo.Model.StationRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StationRegistrationRepository extends JpaRepository<StationRegistration, Long> {
    
    StationRegistration findByStationNameAndPassword(String stationName, String password);
}
