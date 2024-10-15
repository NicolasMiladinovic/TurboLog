# turbolog

`turboLog` is a Visual Studio Code extension that allows developers to quickly insert `console.log` statements into their code with a fun twist: each log statement is accompanied by a randomly generated emoji! With a simple keyboard shortcut, you can enhance your debugging process and make your logs more visually appealing.

## Features

- **Insert `console.log` Statements**: Easily add `console.log` statements to your code.
- **Random Emojis**: Each log statement includes a random emoji to make debugging more enjoyable.
- **Keyboard Shortcut**: Quickly generate logs with the shortcut `Ctrl + Shift + C`.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl + Shift + X`.
3. Search for "turboLog" in the Extensions Marketplace.
4. Click on the `Install` button.

Alternatively, you can install the extension from the command line:

```bash
code --install-extension your-publisher.turbolog
```

## Usage
1. Open a JavaScript or TypeScript file in Visual Studio Code.
2. Select the text you want to log or place your cursor on a word.
3. Press ``Ctrl + Shift + C`` to insert a ``console.log`` statement below the selected text.

## Example
If you select the text ``myVariable`` and press the shortcut, it will generate:
```bash
console.log('😊 myVariable:', myVariable);
```
Where 😊 is a randomly generated emoji.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please create an issue or submit a pull request.