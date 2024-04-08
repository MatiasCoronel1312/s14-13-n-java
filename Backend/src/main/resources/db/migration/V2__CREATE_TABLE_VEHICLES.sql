CREATE TABLE vehicles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    model_year INT NOT NULL,
    engine_size DOUBLE NOT NULL,
    passengers INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    stock INT NOT NULL,
    category ENUM (
        'SEDAN',
        'SEDAN_PREMIUM',
        'HYBRID',
        'SUV',
        'SPORT',
        'ECONOMIC',
        'MINIVAN',
        'VAN',
        'TRUCK'
    ) NOT NULL,
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);
