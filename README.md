# Advanced Logger

Advanced Logger is a flexible and customizable logging library for Node.js applications. It supports various logging levels (info, warn, error) and allows for customizable output formats and destinations (console, file, etc.). Whether you're developing a small project or a large-scale application, Advanced Logger provides the tools you need to implement effective logging practices.

## Features

- **Multiple Logging Levels**: Info, Warn, and Error to suit different severities of messages.
- **Customizable Output**: Easily direct your logs to the console, files, or other destinations.
- **Flexible Configuration**: Configure your logger with options to suit your project's needs.

## Installation

Install Advanced Logger using npm:

```bash
npm install advanced-logger
```

Or using yarn:
```bash
yarn add advanced-logger
```

## Quick Start

Here's how to get started with Advanced Logger:

```bash
const AdvancedLogger = require('advanced-logger');

// Initialize logger with default settings
const logger = new AdvancedLogger();

// Log messages at different levels
logger.info('This is an info message');
logger.warn('This is a warning');
logger.error('This is an error');
```


## API Reference
**new AdvancedLogger(options)
Creates a new logger instance.**

**Options
logLevel (string):** Minimum level of messages to log. Default: 'info'.
output (string): Output destination of the logs. Default: 'console'. (Future versions may support 'file').

**Logging Methods:**
```bash
logger.info(message): Logs an info message.

logger.warn(message): Logs a warning message.

logger.error(message): Logs an error message.
```