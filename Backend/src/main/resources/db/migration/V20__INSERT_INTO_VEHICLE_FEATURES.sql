-- Hyundai Accent
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Hyundai' AND v.model = 'Accent' AND v.model_year = 2024 AND v.price = 15.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Kia Rio
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Kia' AND v.model = 'Rio' AND v.model_year = 2024 AND v.price = 13.0
AND f.name IN ('4 puertas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Mazda 3
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Mazda' AND v.model = '3' AND v.model_year = 2024 AND v.price = 22.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Mercedes-Benz E-Class
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Mercedes-Benz' AND v.model = 'E-Class' AND v.model_year = 2024 AND v.price = 75.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', '2 maleta(s) grande(s)', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica');

-- BMW 5 Series
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'BMW' AND v.model = '5 Series' AND v.model_year = 2024 AND v.price = 70.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', '2 maleta(s) grande(s)', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica');

-- Toyota RAV4
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Toyota' AND v.model = 'RAV4' AND v.model_year = 2024 AND v.price = 35.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Honda CR-V
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Honda' AND v.model = 'CR-V' AND v.model_year = 2024 AND v.price = 32.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Kia Telluride
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Kia' AND v.model = 'Telluride' AND v.model_year = 2024 AND v.price = 45.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', '2 maleta(s) grande(s)', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica');

-- Hyundai Santa Fe
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Hyundai' AND v.model = 'Santa Fe' AND v.model_year = 2024 AND v.price = 38.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Chevrolet Camaro
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Chevrolet' AND v.model = 'Camaro' AND v.model_year = 2024 AND v.price = 50.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica');

-- Nissan Versa Note
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Nissan' AND v.model = 'Versa Note' AND v.model_year = 2024 AND v.price = 18.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Renault Kwid
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Renault' AND v.model = 'Kwid' AND v.model_year = 2024 AND v.price = 12.0
AND f.name IN ('4 puertas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Mitsubishi Mirage
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Mitsubishi' AND v.model = 'Mirage' AND v.model_year = 2024 AND v.price = 15.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Chevrolet Spark
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Chevrolet' AND v.model = 'Spark' AND v.model_year = 2024 AND v.price = 12.0
AND f.name IN ('4 puertas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Nissan Sentra
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Nissan' AND v.model = 'Sentra' AND v.model_year = 2024 AND v.price = 19.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Fiat Mobi
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Fiat' AND v.model = 'Mobi' AND v.model_year = 2024 AND v.price = 10.0
AND f.name IN ('4 puertas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Peugeot 208
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Peugeot' AND v.model = '208' AND v.model_year = 2024 AND v.price = 18.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Citroën C3
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Citroën' AND v.model = 'C3' AND v.model_year = 2024 AND v.price = 19.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Toyota Yaris
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Toyota' AND v.model = 'Yaris' AND v.model_year = 2024 AND v.price = 16.0
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');
