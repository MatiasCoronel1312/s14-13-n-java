package com.gocar.app.repositories;

import com.gocar.app.enums.Category;
import com.gocar.app.models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Long> {

    List<Vehicle> findVehicleByCategory(Category category);

}
