ALTER TABLE t_p19030995_steel_gas_equipment_.company_profiles
  ADD COLUMN IF NOT EXISTS profile_type VARCHAR(20) NOT NULL DEFAULT 'company',
  ADD COLUMN IF NOT EXISTS full_name VARCHAR(255) NOT NULL DEFAULT '';