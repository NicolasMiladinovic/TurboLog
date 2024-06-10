import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('GGWP, your extension "turbolog" is now active!');

	const disposable = vscode.commands.registerCommand('turbolog.turboLog', () => {
		vscode.window.showInformationMessage('You executed your extensions TurboLog! gg');

		// Get selected text
		let highlighted: string | undefined = 'Nothing is selected';
		const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
		const selection: vscode.Selection | undefined = editor?.selection;
		console.log('selection', selection);
		const document: vscode.TextDocument | undefined = editor?.document;

		if (editor) {
			highlighted = document?.getText(selection);
			console.log('highlighted :', highlighted);
		}

		// Write texte to the next line
		console.log('charac start', selection?.anchor.character);
		console.log('charac end', selection?.end.character);
		console.log('line start', selection?.anchor.line);
		console.log('line end', selection?.end.line);
		// console.log('line were we write', selection?.end?.line + 1);
		
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }