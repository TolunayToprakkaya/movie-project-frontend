import {API_BASE} from "./env";
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use("/movie/fetchAllMovieList",
        createProxyMiddleware({
            target: `${API_BASE}`,
            changeOrigin: true
        })
    );
};

/*
const { createProxyMiddleware } = require("http-proxy-middleware"); // import module
const { API_BASE } = require("./env");

module.exports = function (app) {
    app.use(
        "/movie/",
        createProxyMiddleware({
            target: API_BASE,
            changeOrigin: true,
        })
    );
};
*/