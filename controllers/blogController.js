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
 
};

const blogController = { index, show, store, update, modify, destroy };

export default blogController;
