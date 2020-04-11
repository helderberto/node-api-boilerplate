const useMiddlewares = (...middlewares) => (app) => {
  middlewares.forEach((middleware) => app.use(middleware));
};

module.exports = useMiddlewares;
