CREATE TABLE IF NOT EXISTS events (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    event_date TIMESTAMP NOT NULL,
    organizer_id INT REFERENCES users(id) ON DELETE SET NULL,
    image_url TEXT NOT NULL,
    category VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);