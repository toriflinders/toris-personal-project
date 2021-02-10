INSERT INTO single_user (
  username,
  email,
  password,
  admin
) VALUES ($1, $2, $3, $4)
RETURNING user_id, username, email, admin;


-- INSERT INTO single_user (username, email, password, admin) VALUES (
--   ${username},
--   ${email},
--   ${hash},
--   ${admin}
-- )
-- RETURNING user_id, username, email, admin;