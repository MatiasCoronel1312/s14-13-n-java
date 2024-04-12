package com.gocar.app.dtos.reservation;

import com.gocar.app.dtos.user.UserResponseDto;
import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;
import com.gocar.app.models.User;
import com.gocar.app.models.Vehicle;

public record ReservationResponseDTO(

        Long id,
        Vehicle vehicle,
        UserResponseDto User,
        Double iva,
        Double Subtotal,
        Double total,
        Insurance Insurance) {

    public  ReservationResponseDTO (Reservation reservation){
        this(reservation.getId(), reservation.getVehicle(), new UserResponseDto(reservation.getUser()), reservation.getIva(), reservation.getSubtotal() , reservation.getTotal()
                , reservation.getInsurance());

    }


}
