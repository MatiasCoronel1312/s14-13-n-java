package com.gocar.app.controller;
import com.gocar.app.dtos.user.UserResponseDto;
import com.gocar.app.models.User;
import com.gocar.app.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@SecurityRequirement(name = "bearer-key")
@Tag(name = "Get Current User")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @Operation(
            summary = "Obtener perfil de usuario",
            description = "Endpoint para obtener los datos del usuario autenticado.",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Datos del usuario obtenidos exitosamente.",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema = @Schema(implementation = UserResponseDto.class)
                            )
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Usuario no encontrado."
                    )
            }
    )
    @GetMapping("/profile")
    public ResponseEntity<UserResponseDto> getUserProfile() {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        User user = userService.findByEmail(userEmail);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        UserResponseDto userResponseDto = new UserResponseDto(user);

        return ResponseEntity.ok(userResponseDto);
    }
}
