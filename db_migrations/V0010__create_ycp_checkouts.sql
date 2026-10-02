CREATE TABLE IF NOT EXISTS ycp_checkouts (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'reserved',
    items_json TEXT NOT NULL DEFAULT '[]',
    total_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    delivery_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    customer_json TEXT NOT NULL DEFAULT '{}',
    delivery_json TEXT NOT NULL DEFAULT '{}',
    warehouse_id VARCHAR(100) NOT NULL DEFAULT '',
    order_id VARCHAR(255),
    order_number VARCHAR(100),
    payment_method VARCHAR(30),
    delivery_status VARCHAR(50) NOT NULL DEFAULT 'new',
    status_history_json TEXT NOT NULL DEFAULT '[]',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ycp_checkouts_order_id ON ycp_checkouts(order_id);
