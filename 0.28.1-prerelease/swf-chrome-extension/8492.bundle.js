"use strict";(self.webpackChunkchrome_extension_serverless_workflow_editor=self.webpackChunkchrome_extension_serverless_workflow_editor||[]).push([[8492],{28492:(e,t,i)=>{i.r(t),i.d(t,{Adapter:()=>h,CodeActionAdaptor:()=>O,DefinitionAdapter:()=>x,DiagnosticsAdapter:()=>f,FormatAdapter:()=>T,FormatHelper:()=>L,FormatOnTypeAdapter:()=>P,InlayHintsAdapter:()=>K,Kind:()=>A,LibFiles:()=>b,OccurrencesAdapter:()=>k,OutlineAdapter:()=>C,QuickInfoAdapter:()=>S,ReferenceAdapter:()=>v,RenameAdapter:()=>N,SignatureHelpAdapter:()=>y,SuggestAdapter:()=>_,WorkerManager:()=>u,flattenDiagnosticMessageText:()=>p,getJavaScriptWorker:()=>E,getTypeScriptWorker:()=>H,setupJavaScript:()=>R,setupTypeScript:()=>M});var s=i(28731),r=i(52891),n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(e,t,i)=>(((e,t,i)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),d={};((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))l.call(e,i)||"default"===i||n(e,i,{get:()=>t[i],enumerable:!(s=a(t,i))||s.enumerable})})(d,s);var u=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=d.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(d.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},g={};function p(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=p(r,t,i);return s}function m(e){return e?e.map((e=>e.text)).join(""):""}g["lib.d.ts"]=!0,g["lib.dom.d.ts"]=!0,g["lib.dom.iterable.d.ts"]=!0,g["lib.es2015.collection.d.ts"]=!0,g["lib.es2015.core.d.ts"]=!0,g["lib.es2015.d.ts"]=!0,g["lib.es2015.generator.d.ts"]=!0,g["lib.es2015.iterable.d.ts"]=!0,g["lib.es2015.promise.d.ts"]=!0,g["lib.es2015.proxy.d.ts"]=!0,g["lib.es2015.reflect.d.ts"]=!0,g["lib.es2015.symbol.d.ts"]=!0,g["lib.es2015.symbol.wellknown.d.ts"]=!0,g["lib.es2016.array.include.d.ts"]=!0,g["lib.es2016.d.ts"]=!0,g["lib.es2016.full.d.ts"]=!0,g["lib.es2017.d.ts"]=!0,g["lib.es2017.full.d.ts"]=!0,g["lib.es2017.intl.d.ts"]=!0,g["lib.es2017.object.d.ts"]=!0,g["lib.es2017.sharedmemory.d.ts"]=!0,g["lib.es2017.string.d.ts"]=!0,g["lib.es2017.typedarrays.d.ts"]=!0,g["lib.es2018.asyncgenerator.d.ts"]=!0,g["lib.es2018.asynciterable.d.ts"]=!0,g["lib.es2018.d.ts"]=!0,g["lib.es2018.full.d.ts"]=!0,g["lib.es2018.intl.d.ts"]=!0,g["lib.es2018.promise.d.ts"]=!0,g["lib.es2018.regexp.d.ts"]=!0,g["lib.es2019.array.d.ts"]=!0,g["lib.es2019.d.ts"]=!0,g["lib.es2019.full.d.ts"]=!0,g["lib.es2019.object.d.ts"]=!0,g["lib.es2019.string.d.ts"]=!0,g["lib.es2019.symbol.d.ts"]=!0,g["lib.es2020.bigint.d.ts"]=!0,g["lib.es2020.d.ts"]=!0,g["lib.es2020.full.d.ts"]=!0,g["lib.es2020.intl.d.ts"]=!0,g["lib.es2020.promise.d.ts"]=!0,g["lib.es2020.sharedmemory.d.ts"]=!0,g["lib.es2020.string.d.ts"]=!0,g["lib.es2020.symbol.wellknown.d.ts"]=!0,g["lib.es2021.d.ts"]=!0,g["lib.es2021.full.d.ts"]=!0,g["lib.es2021.intl.d.ts"]=!0,g["lib.es2021.promise.d.ts"]=!0,g["lib.es2021.string.d.ts"]=!0,g["lib.es2021.weakref.d.ts"]=!0,g["lib.es5.d.ts"]=!0,g["lib.es6.d.ts"]=!0,g["lib.esnext.d.ts"]=!0,g["lib.esnext.full.d.ts"]=!0,g["lib.esnext.intl.d.ts"]=!0,g["lib.esnext.promise.d.ts"]=!0,g["lib.esnext.string.d.ts"]=!0,g["lib.esnext.weakref.d.ts"]=!0,g["lib.scripthost.d.ts"]=!0,g["lib.webworker.d.ts"]=!0,g["lib.webworker.importscripts.d.ts"]=!0,g["lib.webworker.iterable.d.ts"]=!0;var h=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},b=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!g[e.path.slice(1)]}getOrCreateModel(e){const t=d.Uri.parse(e),i=d.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return d.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=r.TG.getExtraLibs()[e];return s?d.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},f=class extends h{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():d.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{d.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(d.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(d.editor.onWillDisposeModel(n)),this._disposables.push(d.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of d.editor.getModels())n(e)}});const a=()=>{for(const e of d.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),d.editor.getModels().forEach((e=>r(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?d.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||d.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(d.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(d.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o,message:p(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:p(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return d.MarkerSeverity.Error;case 3:return d.MarkerSeverity.Info;case 0:return d.MarkerSeverity.Warning;case 2:return d.MarkerSeverity.Hint}return d.MarkerSeverity.Info}},_=class extends h{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const r=e.getWordUntilPosition(t),n=new d.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const c=await l.getCompletionsAtPosition(a.toString(),o);return c&&!e.isDisposed()?{suggestions:c.entries.map((i=>{let s=n;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),r=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new d.Range(t.lineNumber,t.column,r.lineNumber,r.column)}const r=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&r.push(d.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:_.convertKind(i.kind),tags:r}}))}:void 0}async resolveCompletionItem(e,t){const i=e,s=i.uri,r=i.position,n=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),n,i.label);return o?{uri:s,position:r,label:o.name,kind:_.convertKind(o.kind),detail:m(o.displayParts),documentation:{value:_.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case A.primitiveType:case A.keyword:return d.languages.CompletionItemKind.Keyword;case A.variable:case A.localVariable:return d.languages.CompletionItemKind.Variable;case A.memberVariable:case A.memberGetAccessor:case A.memberSetAccessor:return d.languages.CompletionItemKind.Field;case A.function:case A.memberFunction:case A.constructSignature:case A.callSignature:case A.indexSignature:return d.languages.CompletionItemKind.Function;case A.enum:return d.languages.CompletionItemKind.Enum;case A.module:return d.languages.CompletionItemKind.Module;case A.class:return d.languages.CompletionItemKind.Class;case A.interface:return d.languages.CompletionItemKind.Interface;case A.warning:return d.languages.CompletionItemKind.File}return d.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=m(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${w(i)}`;return t}};function w(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var y=class extends h{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case d.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(r.toString(),n,{triggerReason:y._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:m(e.documentation)},t.label+=m(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=m(i.displayParts),a={label:n,documentation:{value:m(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=m(e.separatorDisplayParts))})),t.label+=m(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},S=class extends h{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=m(a.documentation),l=a.tags?a.tags.map((e=>w(e))).join("  \n\n"):"",c=m(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},k=class extends h{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getOccurrencesAtPosition(s.toString(),r);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?d.languages.DocumentHighlightKind.Write:d.languages.DocumentHighlightKind.Text}))):void 0}},x=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of a){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},v=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(r.toString(),n);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},C=class extends h{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationBarItems(i.toString());if(!r||e.isDisposed())return;const n=(t,i,s)=>{let r={name:i.text,detail:"",kind:D[i.kind]||d.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(r.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)n(t,e,r.name);t.push(r)};let a=[];return r.forEach((e=>n(a,e))),a}},A=class{};c(A,"unknown",""),c(A,"keyword","keyword"),c(A,"script","script"),c(A,"module","module"),c(A,"class","class"),c(A,"interface","interface"),c(A,"type","type"),c(A,"enum","enum"),c(A,"variable","var"),c(A,"localVariable","local var"),c(A,"function","function"),c(A,"localFunction","local function"),c(A,"memberFunction","method"),c(A,"memberGetAccessor","getter"),c(A,"memberSetAccessor","setter"),c(A,"memberVariable","property"),c(A,"constructorImplementation","constructor"),c(A,"callSignature","call"),c(A,"indexSignature","index"),c(A,"constructSignature","construct"),c(A,"parameter","parameter"),c(A,"typeParameter","type parameter"),c(A,"primitiveType","primitive type"),c(A,"label","label"),c(A,"alias","alias"),c(A,"const","const"),c(A,"let","let"),c(A,"warning","warning");var D=Object.create(null);D[A.module]=d.languages.SymbolKind.Module,D[A.class]=d.languages.SymbolKind.Class,D[A.enum]=d.languages.SymbolKind.Enum,D[A.interface]=d.languages.SymbolKind.Interface,D[A.memberFunction]=d.languages.SymbolKind.Method,D[A.memberVariable]=d.languages.SymbolKind.Property,D[A.memberGetAccessor]=d.languages.SymbolKind.Property,D[A.memberSetAccessor]=d.languages.SymbolKind.Property,D[A.variable]=d.languages.SymbolKind.Variable,D[A.const]=d.languages.SymbolKind.Variable,D[A.localVariable]=d.languages.SymbolKind.Variable,D[A.variable]=d.languages.SymbolKind.Variable,D[A.function]=d.languages.SymbolKind.Function,D[A.localFunction]=d.languages.SymbolKind.Function;var F,I,L=class extends h{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},T=class extends L{async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,L._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},P=class extends L{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,L._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},O=class extends L{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=L._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const t of i.changes)for(const i of t.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},N=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:d}}},K=class extends h{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?d.languages.InlayHintKind.Parameter:d.languages.InlayHintKind.Type}};function M(e){I=V(e,"typescript")}function R(e){F=V(e,"javascript")}function E(){return new Promise(((e,t)=>{if(!F)return t("JavaScript not registered!");e(F)}))}function H(){return new Promise(((e,t)=>{if(!I)return t("TypeScript not registered!");e(I)}))}function V(e,t){const i=new u(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),r=new b(s);return d.languages.registerCompletionItemProvider(t,new _(s)),d.languages.registerSignatureHelpProvider(t,new y(s)),d.languages.registerHoverProvider(t,new S(s)),d.languages.registerDocumentHighlightProvider(t,new k(s)),d.languages.registerDefinitionProvider(t,new x(r,s)),d.languages.registerReferenceProvider(t,new v(r,s)),d.languages.registerDocumentSymbolProvider(t,new C(s)),d.languages.registerDocumentRangeFormattingEditProvider(t,new T(s)),d.languages.registerOnTypeFormattingEditProvider(t,new P(s)),d.languages.registerCodeActionProvider(t,new O(s)),d.languages.registerRenameProvider(t,new N(r,s)),d.languages.registerInlayHintsProvider(t,new K(s)),new f(r,e,t,s),s}}}]);