module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ac677bf0c3850a6b32793750b3e3101'),
  },
});
