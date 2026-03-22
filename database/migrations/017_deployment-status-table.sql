CREATE TABLE deployment_status (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    status TEXT NOT NULL CHECK (status IN ('ready', 'deploying')),
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO deployment_status (id, status) VALUES (1, 'ready');