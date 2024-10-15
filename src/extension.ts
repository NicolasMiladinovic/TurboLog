import * as vscode from 'vscode';
// @ts-ignore
import emojiGenerator from 'generate-random-emoji';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('turbolog.addLog', () => {
        // Get the active text editor
        const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

        if (editor) {
            const selection: vscode.Selection = editor.selection;
            const document: vscode.TextDocument = editor.document;

            // Get the selected text or the current word if no selection is made
            const selectedText: string = document.getText(selection) || '';

            // Get the current line where the selection ends
            const currentLine: number = selection.end.line;

            // Generate one random emoji
            const randomEmoji: any = emojiGenerator.generateEmojis(1)[0].image;

			// Create the console.log statement with the emoji
            const logToInsert: string = `console.log('${randomEmoji} ${selectedText}:', ${selectedText});`;

            // Insert the console.log statement on the line below the selected text
            editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(currentLine + 1, 0), `\n${logToInsert}`);
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
