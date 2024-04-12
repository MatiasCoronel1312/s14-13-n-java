package com.gocar.app.controller;

import com.gocar.app.dtos.auth.AuthResponseDto;
import com.gocar.app.dtos.auth.LoginRequestDto;
import com.gocar.app.dtos.auth.RegisterRequestDto;
import com.gocar.app.dtos.exception.ErrorResponseDto;
import com.gocar.app.services.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearer-key")
@Tag(name = "Auth")
public class AuthController {
    private final AuthService authService;
    @Operation(
            summary="Endpoint loguear un usuario",
            description = "Endpoint para loguearse",
            method = "POST",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json con el token",
                            content = @Content(schema = @Schema(implementation = AuthResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. En caso de error en el ingreso de datos, devuelve, en la mayoría de los casos, un Json que contiene el campo del error y una descripción del mismo.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(authService.login(loginRequestDto));
    }
    @Operation(
            summary="Endpoint registrar  un usuario",
            description = "Endpoint para registrarse",
            method = "POST",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json con el token",
                            content = @Content(schema = @Schema(implementation = AuthResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. En caso de error en el ingreso de datos, devuelve, en la mayoría de los casos, un Json que contiene el campo del error y una descripción del mismo.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PostMapping(value = "register")
    public ResponseEntity<AuthResponseDto> register(@Valid @RequestBody RegisterRequestDto registerRequestDto){
        return  ResponseEntity.ok(authService.register(registerRequestDto));
    }

}
