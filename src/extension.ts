import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('GGWP, your extension "turbolog" is now active!');

	const disposable = vscode.commands.registerCommand('turbolog.turboLog', () => {
		vscode.window.showInformationMessage('Hello World from TurboLog! gg');

		// Get selected text
		const editor = vscode.window.activeTextEditor;
		const selection = editor?.selection;
		if (selection && !selection.isEmpty) {
			const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
			const highlighted = editor?.document.getText(selectionRange);
			console.log('highlighted', highlighted);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
