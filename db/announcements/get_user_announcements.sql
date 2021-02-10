-- SELECT * FROM announcements WHERE announce_id= $1;


-- SELECT * FROM announcements WHERE announce_id = ${announce_id};
SELECT * FROM announcements WHERE announce_id = announce_id;


-- SELECT * FROM announcements WHERE announce_id = announce_id;
-- $1 might be for just one item back. the way i have it may bring back every option under announce_id
-- changed get_announcements to get_user_announcements
