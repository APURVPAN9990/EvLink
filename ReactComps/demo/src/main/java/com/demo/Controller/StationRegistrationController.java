package com.demo.Controller;



import com.demo.Model.StationRegistration;
import com.demo.Repository.StationRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to connect
@RequestMapping("/api")
public class StationRegistrationController {

    @Autowired
    private StationRegistrationRepository stationRegistrationRepository;

    @PostMapping("/stationregister")
    public StationRegistration registerStation(@RequestBody StationRegistration stationRegistration) {
        return stationRegistrationRepository.save(stationRegistration);
    }

    @PostMapping("/stationlogin")
    public StationRegistration loginStation(@RequestParam String stationName, @RequestParam String password) {
        return stationRegistrationRepository.findByStationNameAndPassword(stationName, password);
    }
}
