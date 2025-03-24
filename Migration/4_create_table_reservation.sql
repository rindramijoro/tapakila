BEGIN;
    CREATE TYPE reservation_status as ENUM('pending', 'confirmed', 'canceled');
COMMIT;

CREATE TABLE IF NOT EXISTS reservations (
    id INT PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    ticket_id INT REFERENCES tickets(id) ON DELETE CASCADE,
    total_quantity INT NOT NULL,
    status reservation_status DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

