package com.gocar.app.config.mercadopago;

import com.mercadopago.MercadoPago;
import com.mercadopago.exceptions.MPConfException;
import com.mercadopago.resources.Preference;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MercadoPagoConfig {

    @Value("${MERCADOPAGO_ACCESSTOKEN}")
    private String accessToken;

    @Bean
    public Preference initializeMercadoPagoSDK() throws MPConfException {
        MercadoPago.SDK.setAccessToken(accessToken);
        return new Preference();
    }
}
