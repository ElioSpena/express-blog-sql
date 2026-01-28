export default function routeNotFound(req, res, next) {
  res.status(404);
  res.json({
    error: "404 NOT FOUND",
    message: "Route not found",
  });
}
