export function errorHandler(err, req, res, next) {
  console.error('❌ Error:', err);
  return res.status(500).json({ success: false, message: 'Internal server error' });
}

export function notFound(req, res) {
  return res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
}