ALTER TABLE t_p19030995_steel_gas_equipment_.orders
  ADD COLUMN IF NOT EXISTS payment_method VARCHAR(20) NOT NULL DEFAULT 'card';