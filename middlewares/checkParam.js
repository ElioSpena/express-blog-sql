import connection from "../db.js";

export default function checkParam(req, res, next) {
  const { id } = req.params;
  const query = `SELECT id FROM posts WHERE id = ?`;
  connection.query(query, [id], (err, results) => {
    if (err) return next(err);
    if (results.length === 0) {
      res.status(404);
      res.json({
        error: "NOT FOUND",
        message: "post not found",
      });
    }
    next();
  });
}
