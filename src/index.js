class AdvancedLogger {
  constructor(options = {}) {
    this.logLevel = options.logLevel || "info";
    this.output = options.output || "console"; // 'file' could be an option
  }

  log(message, level = "info") {
    if (this.output === "console") {
      console.log(`[${level.toUpperCase()}]: ${message}`);
    }
    // Add more output methods (e.g., to a file) as needed.
  }

  info(message) {
    this.log(message, "info");
  }

  warn(message) {
    this.log(message, "warn");
  }

  error(message) {
    this.log(message, "error");
  }
}

module.exports = AdvancedLogger;
