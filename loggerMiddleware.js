// loggerMiddleware.js
const loggerMiddleware = (req, res, next) => {
    const currentTimestamp = new Date().toISOString();
    const requestMethod = req.method;
    const requestUrl = req.url;

    // Log the intercepted traffic details to the terminal console
    console.log(`[${currentTimestamp}] Intercepted ${requestMethod} request to: ${requestUrl}`);
    
    // Hand execution off to the next component in the routing stack
    next();
};

module.exports = loggerMiddleware;
