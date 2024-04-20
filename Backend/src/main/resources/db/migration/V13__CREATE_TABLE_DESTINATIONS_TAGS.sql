CREATE TABLE destinations_tags (
    destination_id BIGINT,
    tag_id BIGINT,
    PRIMARY KEY (destination_id, tag_id),
    FOREIGN KEY (destination_id) REFERENCES destinations(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);
