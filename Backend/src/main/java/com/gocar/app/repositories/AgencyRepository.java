package com.gocar.app.repositories;


import com.gocar.app.models.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface AgencyRepository extends JpaRepository<Agency, Long> {
}
