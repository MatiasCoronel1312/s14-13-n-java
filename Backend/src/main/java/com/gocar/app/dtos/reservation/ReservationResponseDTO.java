package com.gocar.app.dtos.reservation;

import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.dtos.user.UserResponseDto;
import com.gocar.app.dtos.vehicle.VehicleResponseDTO;
import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;
import com.gocar.app.models.User;
import com.gocar.app.models.Vehicle;

public record ReservationResponseDTO(

        Long id,
        VehicleResponseDTO vehicle,
        UserResponseDto User,
        Insurance Insurance,

        ReservationDatesResponseDto reservationDates,
        Double iva,
        Double administrativeFee,
        Double Subtotal,
        Double total) {

    public  ReservationResponseDTO (Reservation reservation){
        this(reservation.getId(), new VehicleResponseDTO(reservation.getVehicle()),
                new UserResponseDto(reservation.getUser()) , reservation.getInsurance(), new ReservationDatesResponseDto(reservation.getReservationDates()), reservation.getIva(), reservation.getAdministrativeFee(),reservation.getSubtotal() , reservation.getTotal()
                );

    }


}
