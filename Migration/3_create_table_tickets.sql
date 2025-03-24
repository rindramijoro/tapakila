BEGIN;
    CREATE TYPE ticket_type as ENUM('Standard', 'VIP', 'Early Bird');
COMMIT;

CREATE TABLE IF NOT EXISTS tickets (
    id INT PRIMARY KEY,
    type ticket_type NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    buying_limit INT NOT NULL,
    is_active BOOLEAN NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
);