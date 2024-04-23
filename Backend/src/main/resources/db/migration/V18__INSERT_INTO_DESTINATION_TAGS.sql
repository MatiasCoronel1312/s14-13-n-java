INSERT INTO destinations_tags (destination_id, tag_id)
VALUES
    -- Relacionar destino con id 1 con las etiquetas "Historia", "Fiestas" y "Gastronomia"
    (1, 3), -- Historia
    (1, 1), -- Fiestas
    (1, 4), -- Gastronomia
    -- Relacionar destino con id 2 con las etiquetas "Aventura", "Fiestas" y "Naturaleza"
    (2, 2), -- Aventura
    (2, 1), -- Fiestas
    (2, 5), -- Naturaleza
    -- Relacionar destino con id 3 con las etiquetas "Naturaleza", "Gastronomia" y "Fiestas"
    (3, 5), -- Naturaleza
    (3, 4), -- Gastronomia
    (3, 1), -- Fiestas
    -- Relacionar destino con id 4 con las etiquetas "Naturaleza", "Aventura" y "Gastronomia"
    (4, 5), -- Naturaleza
    (4, 2), -- Aventura
    (4, 4), -- Gastronomia
    -- Relacionar destino con id 5 con las etiquetas "Naturaleza", "Gastronomia" y "Fiestas"
    (5, 5), -- Naturaleza
    (5, 4), -- Gastronomia
    (5, 1), -- Fiestas
    -- Relacionar destino con id 6 con las etiquetas "Fiestas", "Historia" y "Gastronomia"
    (6, 1), -- Fiestas
    (6, 3), -- Historia
    (6, 4); -- Gastronomia