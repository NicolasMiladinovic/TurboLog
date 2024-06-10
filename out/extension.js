"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('GGWP, your extension "turbolog" is now active!');
    const disposable = vscode.commands.registerCommand('turbolog.turboLog', () => {
        vscode.window.showInformationMessage('You executed your extensions TurboLog! gg');
        // Get selected text
        let highlighted = 'Nothing is selected';
        const editor = vscode.window.activeTextEditor;
        const selection = editor?.selection;
        console.log('selection', selection);
        const document = editor?.document;
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
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map