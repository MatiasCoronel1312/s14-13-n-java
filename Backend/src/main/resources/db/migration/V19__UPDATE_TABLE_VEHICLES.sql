ALTER TABLE vehicles
MODIFY COLUMN category ENUM('SEDAN',
                            'SEDAN_PREMIUM',
                            'HYBRID',
                            'SUV',
                            'SPORT',
                            'ECONOMIC',
                            'MINIVAN',
                            'VAN',
                            'TRUCK',
                            'COMPACT_HATCHBACK');
