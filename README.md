// README.md

# Embeddable Poll Widget

A lightweight, customizable poll widget that can be embedded in any HTML page.

## Installation

1. Include the required dependencies in your HTML:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

2. Include the Poll Widget assets:

```html
<link rel="stylesheet" href="path/to/poll-widget.min.css" />
<script src="path/to/poll-widget.min.js"></script>
```

## Usage

Add a container element with the `data-poll-widget` attribute and provide poll data using the `data-polls` attribute:

```html
<div
  data-poll-widget
  data-polls='[{
    "id": "unique-poll-id",
    "question": "Your question here?",
    "options": [
        {"id": "option1", "text": "First option", "votes": 0},
        {"id": "option2", "text": "Second option", "votes": 0}
    ]
}]'
></div>
```

### Poll Configuration

Each poll object should have the following structure:

- `id` (string): Unique identifier for the poll
- `question` (string): The poll question
- `options` (array): Array of option objects with:
  - `id` (string): Unique identifier for the option
  - `text` (string): Option text
  - `votes` (number): Initial vote count (usually 0)

### Multiple Polls

You can include multiple polls in a single container by adding more poll objects to the data-polls array.

### Manual Initialization

If needed, you can manually initialize the polls:

```javascript
window.PollWidget.init();
```

## Building from Source

1. Install dependencies:

```bash
npm install
```

2. Build the widget:

```bash
npm run built
```

The built files will be available in the `dist` directory:

- `poll-widget.min.js`: Minified JavaScript bundle
- `poll-widget.min.css`: Minified CSS bundle

## Running Tests

```bash
npm test
```
