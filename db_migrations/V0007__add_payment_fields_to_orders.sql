ALTER TABLE orders
    ADD COLUMN payment_id VARCHAR(255),
    ADD COLUMN payment_status VARCHAR(50) NOT NULL DEFAULT 'pending',
    ADD COLUMN payment_url TEXT,
    ADD COLUMN paid_at TIMESTAMP;

CREATE INDEX idx_orders_payment_id ON orders(payment_id);
