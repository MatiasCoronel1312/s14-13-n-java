CREATE TABLE destinations_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    image_Url VARCHAR(255) NOT NULL,
    destination_id BIGINT,
    FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
);