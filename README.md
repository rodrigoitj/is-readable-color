# Is Readable Color

A npm module that determines if a text color is readable in contrast with a background color

## Usage

To use this function, you can call it like this:

```javascript
const isReadableColor = require('is-readable-color');
const textColor = '#000000'; // Black
const bgColor = '#ffffff'; // White

if (isReadableColor(textColor, bgColor)) {
  console.log('The text color is readable.');
} else {
  console.log('The text color is not readable.');
}
```

Also a text size optional parameter is accepted, default is 18

```javascript
isReadableColor(textColor, bgColor, 12)
```
