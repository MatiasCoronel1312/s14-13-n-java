package com.gocar.app.repositories;


import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.models.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AgencyRepository extends JpaRepository<Agency, Long> {

    List<Agency> findByCountryContaining(String name);
}
