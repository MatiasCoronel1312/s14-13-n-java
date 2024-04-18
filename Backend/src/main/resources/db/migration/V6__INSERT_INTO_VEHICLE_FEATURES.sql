--  Toyota Corolla
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Toyota' AND v.model = 'Corolla' AND v.model_year = 2024 AND v.price = 62
AND f.name IN ('4 puertas', 'ABS', '2 maleta(s) grande(s)', '5 personas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica');

--  Dodge Challenger
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Dodge' AND v.model = 'Challenger' AND v.model_year = 2024 AND v.price = 82
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

--  Chevrolet Tahoe
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Chevrolet' AND v.model = 'Tahoe' AND v.model_year = 2024 AND v.price = 159
AND f.name IN ('4 puertas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', '2 maleta(s) pequeña(s)');

-- Nissan Versa
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Nissan' AND v.model = 'Versa' AND v.model_year = 2024 AND v.price = 70
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', '5 personas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Ford Transit
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Ford' AND v.model = 'Transit' AND v.model_year = 2024 AND v.price = 210
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', '2 maleta(s) grande(s)', '5 personas', 'Aire acondicionado', 'Cierre centralizado', 'Automático');

-- Chevrolet Express
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Chevrolet' AND v.model = 'Express' AND v.model_year = 2024 AND v.price = 130
AND f.name IN ('4 puertas',  'Aire acondicionado',  'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Ford Mustang Convertible
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Ford' AND v.model = 'Mustang Convertible' AND v.model_year = 2024 AND v.price = 310
AND f.name IN ('4 puertas', '2 maleta(s) grande(s)', '5 personas', 'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Audi A5
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Audi' AND v.model = 'A5' AND v.model_year = 2024 AND v.price = 140
AND f.name IN ('4 puertas', 'Levantavidrios eléctricos', 'ABS', '2 maleta(s) grande(s)', '5 personas',  'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');

-- Toyota Prius
INSERT INTO vehicle_features (vehicle_id, feature_id)
SELECT v.id, f.id
FROM vehicles v
CROSS JOIN features f
WHERE v.brand = 'Toyota' AND v.model = 'Prius' AND v.model_year = 2024 AND v.price = 80
AND f.name IN ('4 puertas',  'Aire acondicionado', 'Cierre centralizado', 'Automático', 'Dir. Asistida Eléctrica', '2 maleta(s) pequeña(s)');
