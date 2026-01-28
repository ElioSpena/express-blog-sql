import connection from "../db.js";

const index = (req, res, next) => {
  const query = `SELECT * FROM posts`;
  connection.query(query, (err, results) => {
    if (err) return next(err);
    res.json({
      results: results,
    });
  });
};

const show = (req, res) => {};

const store = (req, res) => {};

const update = (req, res) => {};

const modify = (req, res) => {};

const destroy = (req, res, next) => {
  const { id } = req.params;
  const query = `DELETE FROM posts WHERE id = ?`;
  connection.query(query, [id], (err) => {
    if (err) return next(err);
    res.sendStatus(204);
  });
};

const blogController = { index, show, store, update, modify, destroy };

export default blogController;
