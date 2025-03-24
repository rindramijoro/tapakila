CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

COPY (
    SELECT json_agg(users) FROM users
) TO 'C:\HEI\TAPAKILA-ADMIN-DASHBOARD\tapakila\data.json';

COPY (
    SELECT json_agg(events) FROM events
) TO 'C:\HEI\TAPAKILA-ADMIN-DASHBOARD\tapakila\data.json' DELIMITER ',' CSV QUOTE '"';

COPY (
    SELECT json_agg(tickets) FROM tickets
) TO 'C:\HEI\TAPAKILA-ADMIN-DASHBOARD\tapakila\data.json' DELIMITER ',' CSV QUOTE '"';

COPY (
    SELECT json_agg(reservations) FROM reservations
) TO 'C:\HEI\TAPAKILA-ADMIN-DASHBOARD\tapakila\data.json' DELIMITER ',' CSV QUOTE '"';
