module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc7cbcbc9191c8802ca1a4a452ae0b31'),
  },
});
