UPDATE announcements 
SET (title, content, date_created) = ($2, $3, $4) 
WHERE announce_id = $1;

-- SELECT announce_id, title, content, author_id, date_created FROM announcements
-- WHERE announce_id = $1;
