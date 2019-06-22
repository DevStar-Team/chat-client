module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        public: "chat.avmasters.club:8080"
    },
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "ko",
            localeDir: "locales",
            enableInSFC: true
        }
    }
};