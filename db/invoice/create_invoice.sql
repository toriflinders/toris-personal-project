INSERT INTO invoice (billing_name, billing_address, billing_city, billing_state, billing_zipcode, art_invoice_id) VALUES ($1, $2, $3, $4, $5, $6);

-- INSERT INTO invoice (billing_name, billing_address, billing_city, billing_state, billing_zipcode) VALUES (billing_name, billing_address, billing_city, billing_state, billing_zipcode);
-- INSERT INTO invoice (billing_name, billing_address, billing_city, billing_state, billing_zipcode) VALUES (${billing_name}, ${billing_address}, ${billing_city}, ${billing_state}, ${billing_zipcode});