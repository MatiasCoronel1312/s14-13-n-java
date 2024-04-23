package com.gocar.app.config.mercadopago;

import com.mercadopago.MercadoPago;
import com.mercadopago.exceptions.MPConfException;
import com.mercadopago.resources.Preference;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MercadoPagoConfig {

    private String accessToken="TEST-2676014329742198-041219-3ccc77922f2b81a5c35fecae5ea1ba59-321381636";

    @Bean
    public Preference initializeMercadoPagoSDK() throws MPConfException {
        MercadoPago.SDK.setAccessToken(accessToken);
        return new Preference();
    }
}
