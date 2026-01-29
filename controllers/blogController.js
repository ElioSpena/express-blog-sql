import connection from "../db.js";

const index = (req, res, next) => {
  const indexQuery = `SELECT * FROM posts`;
  connection.query(indexQuery, (err, results) => {
    if (err) return next(err);
    res.json({
      results: results,
    });
  });
};

const show = (req, res, next) => {
  const { id } = req.params;

  const showQuery = `
SELECT *
FROM posts
WHERE posts.id = ?`;

  connection.query(showQuery, [id], (err, results) => {
    if (err) return next(err);

    const curPost = results[0];

    const tagsQuery = `
SELECT tags.label, tags.id
FROM posts
INNER JOIN post_tag
ON post_tag.post_id = posts.id
INNER JOIN tags 
ON post_tag.tag_id = tags.id
WHERE posts.id = ?`;
    connection.query(tagsQuery, [id], (err, tags) => {
      if (err) return next(err);

      res.json({
        ...curPost,
        tags: tags,
      });
    });
  });
};

const store = (req, res) => {};

const update = (req, res) => {};

const modify = (req, res) => {};

const destroy = (req, res, next) => {
  const { id } = req.params;
  const destroyQuery = `DELETE FROM posts WHERE id = ?`;
  connection.query(destroyQuery, [id], (err) => {
    if (err) return next(err);
    res.sendStatus(204);
  });
};

const blogController = { index, show, store, update, modify, destroy };

export default blogController;
