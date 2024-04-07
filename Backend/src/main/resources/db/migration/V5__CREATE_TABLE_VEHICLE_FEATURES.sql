CREATE TABLE vehicle_features (
    vehicle_id BIGINT,
    feature_id BIGINT,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id),
    FOREIGN KEY (feature_id) REFERENCES features(id),
    PRIMARY KEY (vehicle_id, feature_id)
);
