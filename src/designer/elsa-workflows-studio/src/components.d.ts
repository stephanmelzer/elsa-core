/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
import { ActivityDefinitionProperty, ActivityDesignDisplayContext, ActivityModel, ActivityPropertyDescriptor, VersionOptions, WorkflowDefinition, WorkflowModel } from "./models";
import { MenuItem } from "./components/controls/elsa-context-menu/models";
import { DropdownButtonItem, DropdownButtonOrigin } from "./components/controls/elsa-dropdown-button/models";
import { MonacoValueChangedArgs } from "./components/controls/elsa-monaco/elsa-monaco";
import { ToastNotificationOptions } from "./components/shared/elsa-toast-notification/elsa-toast-notification";
export namespace Components {
    interface AppRoot {
        "serverUrl": string;
    }
    interface AppWorkflowDefinitionsEdit {
        "match": MatchResults;
        "serverUrl": string;
    }
    interface AppWorkflowDefinitionsList {
        "history": RouterHistory;
        "serverUrl": string;
    }
    interface AppWorkflowInstancesList {
        "history": RouterHistory;
        "serverUrl": string;
    }
    interface AppWorkflowRegistry {
    }
    interface ElsaActivityEditorModal {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaCheckListProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaCheckboxProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaConfirmDialog {
        "hide": () => Promise<void>;
        "show": (caption: string, message: string) => Promise<boolean>;
    }
    interface ElsaContextMenu {
        "history": RouterHistory;
        "menuItems": Array<MenuItem>;
    }
    interface ElsaDesignerTree {
        "destroyJsPlumb": () => Promise<void>;
        "model": WorkflowModel;
    }
    interface ElsaDesignerTreeActivity {
        "displayContext": ActivityDesignDisplayContext;
        "icon": string;
    }
    interface ElsaDropdownButton {
        "icon"?: any;
        "items": Array<DropdownButtonItem>;
        "origin": DropdownButtonOrigin;
        "text": string;
    }
    interface ElsaDropdownProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaExpressionEditor {
        "context"?: string;
        "editorHeight": string;
        "expression": string;
        "fieldName": string;
        "language": string;
        "serverUrl": string;
        "setExpression": (value: string) => Promise<void>;
        "singleLineMode": boolean;
        "workflowDefinitionId": string;
    }
    interface ElsaInputTags {
        "fieldId"?: string;
        "fieldName"?: string;
        "placeHolder"?: string;
        "values"?: Array<string>;
    }
    interface ElsaModalDialog {
        "hide": (animate: boolean) => Promise<void>;
        "show": (animate: boolean) => Promise<void>;
    }
    interface ElsaMonaco {
        "addJavaScriptLib": (libSource: string, libUri: string) => Promise<void>;
        "editorHeight": string;
        "language": string;
        "setValue": (value: string) => Promise<void>;
        "singleLineMode": boolean;
        "value": string;
    }
    interface ElsaMultiLineProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaMultiTextProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaPropertyEditor {
        "context"?: string;
        "editorHeight": string;
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
        "showLabel": boolean;
        "singleLineMode": boolean;
    }
    interface ElsaScriptProperty {
        "context"?: string;
        "editorHeight": string;
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
        "serverUrl": string;
        "singleLineMode": boolean;
        "syntax"?: string;
        "workflowDefinitionId": string;
    }
    interface ElsaSingleLineProperty {
        "propertyDescriptor": ActivityPropertyDescriptor;
        "propertyModel": ActivityDefinitionProperty;
    }
    interface ElsaToastNotification {
        "hide": () => Promise<void>;
        "show": (options: ToastNotificationOptions) => Promise<void>;
    }
    interface ElsaWorkflowDefinitionEditorScreen {
        "exportWorkflow": () => Promise<void>;
        "getServerUrl": () => Promise<string>;
        "getWorkflowDefinitionId": () => Promise<string>;
        "importWorkflow": (file: File) => Promise<void>;
        "monacoLibPath": string;
        "serverUrl": string;
        "workflowDefinitionId": string;
    }
    interface ElsaWorkflowDefinitionsListScreen {
        "history"?: RouterHistory;
        "serverUrl": string;
    }
    interface ElsaWorkflowEditorNotifications {
    }
    interface ElsaWorkflowInstancesListScreen {
        "history"?: RouterHistory;
        "serverUrl": string;
    }
    interface ElsaWorkflowPublishButton {
        "publishing": boolean;
        "workflowDefinition": WorkflowDefinition;
    }
    interface ElsaWorkflowSettingsModal {
        "workflowDefinition": WorkflowDefinition;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppWorkflowDefinitionsEditElement extends Components.AppWorkflowDefinitionsEdit, HTMLStencilElement {
    }
    var HTMLAppWorkflowDefinitionsEditElement: {
        prototype: HTMLAppWorkflowDefinitionsEditElement;
        new (): HTMLAppWorkflowDefinitionsEditElement;
    };
    interface HTMLAppWorkflowDefinitionsListElement extends Components.AppWorkflowDefinitionsList, HTMLStencilElement {
    }
    var HTMLAppWorkflowDefinitionsListElement: {
        prototype: HTMLAppWorkflowDefinitionsListElement;
        new (): HTMLAppWorkflowDefinitionsListElement;
    };
    interface HTMLAppWorkflowInstancesListElement extends Components.AppWorkflowInstancesList, HTMLStencilElement {
    }
    var HTMLAppWorkflowInstancesListElement: {
        prototype: HTMLAppWorkflowInstancesListElement;
        new (): HTMLAppWorkflowInstancesListElement;
    };
    interface HTMLAppWorkflowRegistryElement extends Components.AppWorkflowRegistry, HTMLStencilElement {
    }
    var HTMLAppWorkflowRegistryElement: {
        prototype: HTMLAppWorkflowRegistryElement;
        new (): HTMLAppWorkflowRegistryElement;
    };
    interface HTMLElsaActivityEditorModalElement extends Components.ElsaActivityEditorModal, HTMLStencilElement {
    }
    var HTMLElsaActivityEditorModalElement: {
        prototype: HTMLElsaActivityEditorModalElement;
        new (): HTMLElsaActivityEditorModalElement;
    };
    interface HTMLElsaActivityPickerModalElement extends Components.ElsaActivityPickerModal, HTMLStencilElement {
    }
    var HTMLElsaActivityPickerModalElement: {
        prototype: HTMLElsaActivityPickerModalElement;
        new (): HTMLElsaActivityPickerModalElement;
    };
    interface HTMLElsaCheckListPropertyElement extends Components.ElsaCheckListProperty, HTMLStencilElement {
    }
    var HTMLElsaCheckListPropertyElement: {
        prototype: HTMLElsaCheckListPropertyElement;
        new (): HTMLElsaCheckListPropertyElement;
    };
    interface HTMLElsaCheckboxPropertyElement extends Components.ElsaCheckboxProperty, HTMLStencilElement {
    }
    var HTMLElsaCheckboxPropertyElement: {
        prototype: HTMLElsaCheckboxPropertyElement;
        new (): HTMLElsaCheckboxPropertyElement;
    };
    interface HTMLElsaConfirmDialogElement extends Components.ElsaConfirmDialog, HTMLStencilElement {
    }
    var HTMLElsaConfirmDialogElement: {
        prototype: HTMLElsaConfirmDialogElement;
        new (): HTMLElsaConfirmDialogElement;
    };
    interface HTMLElsaContextMenuElement extends Components.ElsaContextMenu, HTMLStencilElement {
    }
    var HTMLElsaContextMenuElement: {
        prototype: HTMLElsaContextMenuElement;
        new (): HTMLElsaContextMenuElement;
    };
    interface HTMLElsaDesignerTreeElement extends Components.ElsaDesignerTree, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeElement: {
        prototype: HTMLElsaDesignerTreeElement;
        new (): HTMLElsaDesignerTreeElement;
    };
    interface HTMLElsaDesignerTreeActivityElement extends Components.ElsaDesignerTreeActivity, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeActivityElement: {
        prototype: HTMLElsaDesignerTreeActivityElement;
        new (): HTMLElsaDesignerTreeActivityElement;
    };
    interface HTMLElsaDropdownButtonElement extends Components.ElsaDropdownButton, HTMLStencilElement {
    }
    var HTMLElsaDropdownButtonElement: {
        prototype: HTMLElsaDropdownButtonElement;
        new (): HTMLElsaDropdownButtonElement;
    };
    interface HTMLElsaDropdownPropertyElement extends Components.ElsaDropdownProperty, HTMLStencilElement {
    }
    var HTMLElsaDropdownPropertyElement: {
        prototype: HTMLElsaDropdownPropertyElement;
        new (): HTMLElsaDropdownPropertyElement;
    };
    interface HTMLElsaExpressionEditorElement extends Components.ElsaExpressionEditor, HTMLStencilElement {
    }
    var HTMLElsaExpressionEditorElement: {
        prototype: HTMLElsaExpressionEditorElement;
        new (): HTMLElsaExpressionEditorElement;
    };
    interface HTMLElsaInputTagsElement extends Components.ElsaInputTags, HTMLStencilElement {
    }
    var HTMLElsaInputTagsElement: {
        prototype: HTMLElsaInputTagsElement;
        new (): HTMLElsaInputTagsElement;
    };
    interface HTMLElsaModalDialogElement extends Components.ElsaModalDialog, HTMLStencilElement {
    }
    var HTMLElsaModalDialogElement: {
        prototype: HTMLElsaModalDialogElement;
        new (): HTMLElsaModalDialogElement;
    };
    interface HTMLElsaMonacoElement extends Components.ElsaMonaco, HTMLStencilElement {
    }
    var HTMLElsaMonacoElement: {
        prototype: HTMLElsaMonacoElement;
        new (): HTMLElsaMonacoElement;
    };
    interface HTMLElsaMultiLinePropertyElement extends Components.ElsaMultiLineProperty, HTMLStencilElement {
    }
    var HTMLElsaMultiLinePropertyElement: {
        prototype: HTMLElsaMultiLinePropertyElement;
        new (): HTMLElsaMultiLinePropertyElement;
    };
    interface HTMLElsaMultiTextPropertyElement extends Components.ElsaMultiTextProperty, HTMLStencilElement {
    }
    var HTMLElsaMultiTextPropertyElement: {
        prototype: HTMLElsaMultiTextPropertyElement;
        new (): HTMLElsaMultiTextPropertyElement;
    };
    interface HTMLElsaPropertyEditorElement extends Components.ElsaPropertyEditor, HTMLStencilElement {
    }
    var HTMLElsaPropertyEditorElement: {
        prototype: HTMLElsaPropertyEditorElement;
        new (): HTMLElsaPropertyEditorElement;
    };
    interface HTMLElsaScriptPropertyElement extends Components.ElsaScriptProperty, HTMLStencilElement {
    }
    var HTMLElsaScriptPropertyElement: {
        prototype: HTMLElsaScriptPropertyElement;
        new (): HTMLElsaScriptPropertyElement;
    };
    interface HTMLElsaSingleLinePropertyElement extends Components.ElsaSingleLineProperty, HTMLStencilElement {
    }
    var HTMLElsaSingleLinePropertyElement: {
        prototype: HTMLElsaSingleLinePropertyElement;
        new (): HTMLElsaSingleLinePropertyElement;
    };
    interface HTMLElsaToastNotificationElement extends Components.ElsaToastNotification, HTMLStencilElement {
    }
    var HTMLElsaToastNotificationElement: {
        prototype: HTMLElsaToastNotificationElement;
        new (): HTMLElsaToastNotificationElement;
    };
    interface HTMLElsaWorkflowDefinitionEditorScreenElement extends Components.ElsaWorkflowDefinitionEditorScreen, HTMLStencilElement {
    }
    var HTMLElsaWorkflowDefinitionEditorScreenElement: {
        prototype: HTMLElsaWorkflowDefinitionEditorScreenElement;
        new (): HTMLElsaWorkflowDefinitionEditorScreenElement;
    };
    interface HTMLElsaWorkflowDefinitionsListScreenElement extends Components.ElsaWorkflowDefinitionsListScreen, HTMLStencilElement {
    }
    var HTMLElsaWorkflowDefinitionsListScreenElement: {
        prototype: HTMLElsaWorkflowDefinitionsListScreenElement;
        new (): HTMLElsaWorkflowDefinitionsListScreenElement;
    };
    interface HTMLElsaWorkflowEditorNotificationsElement extends Components.ElsaWorkflowEditorNotifications, HTMLStencilElement {
    }
    var HTMLElsaWorkflowEditorNotificationsElement: {
        prototype: HTMLElsaWorkflowEditorNotificationsElement;
        new (): HTMLElsaWorkflowEditorNotificationsElement;
    };
    interface HTMLElsaWorkflowInstancesListScreenElement extends Components.ElsaWorkflowInstancesListScreen, HTMLStencilElement {
    }
    var HTMLElsaWorkflowInstancesListScreenElement: {
        prototype: HTMLElsaWorkflowInstancesListScreenElement;
        new (): HTMLElsaWorkflowInstancesListScreenElement;
    };
    interface HTMLElsaWorkflowPublishButtonElement extends Components.ElsaWorkflowPublishButton, HTMLStencilElement {
    }
    var HTMLElsaWorkflowPublishButtonElement: {
        prototype: HTMLElsaWorkflowPublishButtonElement;
        new (): HTMLElsaWorkflowPublishButtonElement;
    };
    interface HTMLElsaWorkflowSettingsModalElement extends Components.ElsaWorkflowSettingsModal, HTMLStencilElement {
    }
    var HTMLElsaWorkflowSettingsModalElement: {
        prototype: HTMLElsaWorkflowSettingsModalElement;
        new (): HTMLElsaWorkflowSettingsModalElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "app-workflow-definitions-edit": HTMLAppWorkflowDefinitionsEditElement;
        "app-workflow-definitions-list": HTMLAppWorkflowDefinitionsListElement;
        "app-workflow-instances-list": HTMLAppWorkflowInstancesListElement;
        "app-workflow-registry": HTMLAppWorkflowRegistryElement;
        "elsa-activity-editor-modal": HTMLElsaActivityEditorModalElement;
        "elsa-activity-picker-modal": HTMLElsaActivityPickerModalElement;
        "elsa-check-list-property": HTMLElsaCheckListPropertyElement;
        "elsa-checkbox-property": HTMLElsaCheckboxPropertyElement;
        "elsa-confirm-dialog": HTMLElsaConfirmDialogElement;
        "elsa-context-menu": HTMLElsaContextMenuElement;
        "elsa-designer-tree": HTMLElsaDesignerTreeElement;
        "elsa-designer-tree-activity": HTMLElsaDesignerTreeActivityElement;
        "elsa-dropdown-button": HTMLElsaDropdownButtonElement;
        "elsa-dropdown-property": HTMLElsaDropdownPropertyElement;
        "elsa-expression-editor": HTMLElsaExpressionEditorElement;
        "elsa-input-tags": HTMLElsaInputTagsElement;
        "elsa-modal-dialog": HTMLElsaModalDialogElement;
        "elsa-monaco": HTMLElsaMonacoElement;
        "elsa-multi-line-property": HTMLElsaMultiLinePropertyElement;
        "elsa-multi-text-property": HTMLElsaMultiTextPropertyElement;
        "elsa-property-editor": HTMLElsaPropertyEditorElement;
        "elsa-script-property": HTMLElsaScriptPropertyElement;
        "elsa-single-line-property": HTMLElsaSingleLinePropertyElement;
        "elsa-toast-notification": HTMLElsaToastNotificationElement;
        "elsa-workflow-definition-editor-screen": HTMLElsaWorkflowDefinitionEditorScreenElement;
        "elsa-workflow-definitions-list-screen": HTMLElsaWorkflowDefinitionsListScreenElement;
        "elsa-workflow-editor-notifications": HTMLElsaWorkflowEditorNotificationsElement;
        "elsa-workflow-instances-list-screen": HTMLElsaWorkflowInstancesListScreenElement;
        "elsa-workflow-publish-button": HTMLElsaWorkflowPublishButtonElement;
        "elsa-workflow-settings-modal": HTMLElsaWorkflowSettingsModalElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "serverUrl"?: string;
    }
    interface AppWorkflowDefinitionsEdit {
        "match"?: MatchResults;
        "serverUrl"?: string;
    }
    interface AppWorkflowDefinitionsList {
        "history"?: RouterHistory;
        "serverUrl"?: string;
    }
    interface AppWorkflowInstancesList {
        "history"?: RouterHistory;
        "serverUrl"?: string;
    }
    interface AppWorkflowRegistry {
    }
    interface ElsaActivityEditorModal {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaCheckListProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaCheckboxProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaConfirmDialog {
    }
    interface ElsaContextMenu {
        "history"?: RouterHistory;
        "menuItems"?: Array<MenuItem>;
    }
    interface ElsaDesignerTree {
        "model"?: WorkflowModel;
        "onWorkflow-changed"?: (event: CustomEvent<WorkflowModel>) => void;
    }
    interface ElsaDesignerTreeActivity {
        "displayContext"?: ActivityDesignDisplayContext;
        "icon"?: string;
        "onEdit-activity"?: (event: CustomEvent<ActivityModel>) => void;
        "onRemove-activity"?: (event: CustomEvent<ActivityModel>) => void;
    }
    interface ElsaDropdownButton {
        "icon"?: any;
        "items"?: Array<DropdownButtonItem>;
        "onItemSelected"?: (event: CustomEvent<DropdownButtonItem>) => void;
        "origin"?: DropdownButtonOrigin;
        "text"?: string;
    }
    interface ElsaDropdownProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaExpressionEditor {
        "context"?: string;
        "editorHeight"?: string;
        "expression"?: string;
        "fieldName"?: string;
        "language"?: string;
        "onExpressionChanged"?: (event: CustomEvent<string>) => void;
        "serverUrl"?: string;
        "singleLineMode"?: boolean;
        "workflowDefinitionId"?: string;
    }
    interface ElsaInputTags {
        "fieldId"?: string;
        "fieldName"?: string;
        "onValueChanged"?: (event: CustomEvent<Array<string>>) => void;
        "placeHolder"?: string;
        "values"?: Array<string>;
    }
    interface ElsaModalDialog {
    }
    interface ElsaMonaco {
        "editorHeight"?: string;
        "language"?: string;
        "onValueChanged"?: (event: CustomEvent<MonacoValueChangedArgs>) => void;
        "singleLineMode"?: boolean;
        "value"?: string;
    }
    interface ElsaMultiLineProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaMultiTextProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaPropertyEditor {
        "context"?: string;
        "editorHeight"?: string;
        "onDefaultSyntaxValueChanged"?: (event: CustomEvent<string>) => void;
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
        "showLabel"?: boolean;
        "singleLineMode"?: boolean;
    }
    interface ElsaScriptProperty {
        "context"?: string;
        "editorHeight"?: string;
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
        "serverUrl"?: string;
        "singleLineMode"?: boolean;
        "syntax"?: string;
        "workflowDefinitionId"?: string;
    }
    interface ElsaSingleLineProperty {
        "propertyDescriptor"?: ActivityPropertyDescriptor;
        "propertyModel"?: ActivityDefinitionProperty;
    }
    interface ElsaToastNotification {
    }
    interface ElsaWorkflowDefinitionEditorScreen {
        "monacoLibPath"?: string;
        "onWorkflowSaved"?: (event: CustomEvent<WorkflowDefinition>) => void;
        "serverUrl"?: string;
        "workflowDefinitionId"?: string;
    }
    interface ElsaWorkflowDefinitionsListScreen {
        "history"?: RouterHistory;
        "serverUrl"?: string;
    }
    interface ElsaWorkflowEditorNotifications {
    }
    interface ElsaWorkflowInstancesListScreen {
        "history"?: RouterHistory;
        "serverUrl"?: string;
    }
    interface ElsaWorkflowPublishButton {
        "onExportClicked"?: (event: CustomEvent<any>) => void;
        "onImportClicked"?: (event: CustomEvent<File>) => void;
        "onPublishClicked"?: (event: CustomEvent<any>) => void;
        "onUnPublishClicked"?: (event: CustomEvent<any>) => void;
        "publishing"?: boolean;
        "workflowDefinition"?: WorkflowDefinition;
    }
    interface ElsaWorkflowSettingsModal {
        "workflowDefinition"?: WorkflowDefinition;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "app-workflow-definitions-edit": AppWorkflowDefinitionsEdit;
        "app-workflow-definitions-list": AppWorkflowDefinitionsList;
        "app-workflow-instances-list": AppWorkflowInstancesList;
        "app-workflow-registry": AppWorkflowRegistry;
        "elsa-activity-editor-modal": ElsaActivityEditorModal;
        "elsa-activity-picker-modal": ElsaActivityPickerModal;
        "elsa-check-list-property": ElsaCheckListProperty;
        "elsa-checkbox-property": ElsaCheckboxProperty;
        "elsa-confirm-dialog": ElsaConfirmDialog;
        "elsa-context-menu": ElsaContextMenu;
        "elsa-designer-tree": ElsaDesignerTree;
        "elsa-designer-tree-activity": ElsaDesignerTreeActivity;
        "elsa-dropdown-button": ElsaDropdownButton;
        "elsa-dropdown-property": ElsaDropdownProperty;
        "elsa-expression-editor": ElsaExpressionEditor;
        "elsa-input-tags": ElsaInputTags;
        "elsa-modal-dialog": ElsaModalDialog;
        "elsa-monaco": ElsaMonaco;
        "elsa-multi-line-property": ElsaMultiLineProperty;
        "elsa-multi-text-property": ElsaMultiTextProperty;
        "elsa-property-editor": ElsaPropertyEditor;
        "elsa-script-property": ElsaScriptProperty;
        "elsa-single-line-property": ElsaSingleLineProperty;
        "elsa-toast-notification": ElsaToastNotification;
        "elsa-workflow-definition-editor-screen": ElsaWorkflowDefinitionEditorScreen;
        "elsa-workflow-definitions-list-screen": ElsaWorkflowDefinitionsListScreen;
        "elsa-workflow-editor-notifications": ElsaWorkflowEditorNotifications;
        "elsa-workflow-instances-list-screen": ElsaWorkflowInstancesListScreen;
        "elsa-workflow-publish-button": ElsaWorkflowPublishButton;
        "elsa-workflow-settings-modal": ElsaWorkflowSettingsModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-workflow-definitions-edit": LocalJSX.AppWorkflowDefinitionsEdit & JSXBase.HTMLAttributes<HTMLAppWorkflowDefinitionsEditElement>;
            "app-workflow-definitions-list": LocalJSX.AppWorkflowDefinitionsList & JSXBase.HTMLAttributes<HTMLAppWorkflowDefinitionsListElement>;
            "app-workflow-instances-list": LocalJSX.AppWorkflowInstancesList & JSXBase.HTMLAttributes<HTMLAppWorkflowInstancesListElement>;
            "app-workflow-registry": LocalJSX.AppWorkflowRegistry & JSXBase.HTMLAttributes<HTMLAppWorkflowRegistryElement>;
            "elsa-activity-editor-modal": LocalJSX.ElsaActivityEditorModal & JSXBase.HTMLAttributes<HTMLElsaActivityEditorModalElement>;
            "elsa-activity-picker-modal": LocalJSX.ElsaActivityPickerModal & JSXBase.HTMLAttributes<HTMLElsaActivityPickerModalElement>;
            "elsa-check-list-property": LocalJSX.ElsaCheckListProperty & JSXBase.HTMLAttributes<HTMLElsaCheckListPropertyElement>;
            "elsa-checkbox-property": LocalJSX.ElsaCheckboxProperty & JSXBase.HTMLAttributes<HTMLElsaCheckboxPropertyElement>;
            "elsa-confirm-dialog": LocalJSX.ElsaConfirmDialog & JSXBase.HTMLAttributes<HTMLElsaConfirmDialogElement>;
            "elsa-context-menu": LocalJSX.ElsaContextMenu & JSXBase.HTMLAttributes<HTMLElsaContextMenuElement>;
            "elsa-designer-tree": LocalJSX.ElsaDesignerTree & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeElement>;
            "elsa-designer-tree-activity": LocalJSX.ElsaDesignerTreeActivity & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeActivityElement>;
            "elsa-dropdown-button": LocalJSX.ElsaDropdownButton & JSXBase.HTMLAttributes<HTMLElsaDropdownButtonElement>;
            "elsa-dropdown-property": LocalJSX.ElsaDropdownProperty & JSXBase.HTMLAttributes<HTMLElsaDropdownPropertyElement>;
            "elsa-expression-editor": LocalJSX.ElsaExpressionEditor & JSXBase.HTMLAttributes<HTMLElsaExpressionEditorElement>;
            "elsa-input-tags": LocalJSX.ElsaInputTags & JSXBase.HTMLAttributes<HTMLElsaInputTagsElement>;
            "elsa-modal-dialog": LocalJSX.ElsaModalDialog & JSXBase.HTMLAttributes<HTMLElsaModalDialogElement>;
            "elsa-monaco": LocalJSX.ElsaMonaco & JSXBase.HTMLAttributes<HTMLElsaMonacoElement>;
            "elsa-multi-line-property": LocalJSX.ElsaMultiLineProperty & JSXBase.HTMLAttributes<HTMLElsaMultiLinePropertyElement>;
            "elsa-multi-text-property": LocalJSX.ElsaMultiTextProperty & JSXBase.HTMLAttributes<HTMLElsaMultiTextPropertyElement>;
            "elsa-property-editor": LocalJSX.ElsaPropertyEditor & JSXBase.HTMLAttributes<HTMLElsaPropertyEditorElement>;
            "elsa-script-property": LocalJSX.ElsaScriptProperty & JSXBase.HTMLAttributes<HTMLElsaScriptPropertyElement>;
            "elsa-single-line-property": LocalJSX.ElsaSingleLineProperty & JSXBase.HTMLAttributes<HTMLElsaSingleLinePropertyElement>;
            "elsa-toast-notification": LocalJSX.ElsaToastNotification & JSXBase.HTMLAttributes<HTMLElsaToastNotificationElement>;
            "elsa-workflow-definition-editor-screen": LocalJSX.ElsaWorkflowDefinitionEditorScreen & JSXBase.HTMLAttributes<HTMLElsaWorkflowDefinitionEditorScreenElement>;
            "elsa-workflow-definitions-list-screen": LocalJSX.ElsaWorkflowDefinitionsListScreen & JSXBase.HTMLAttributes<HTMLElsaWorkflowDefinitionsListScreenElement>;
            "elsa-workflow-editor-notifications": LocalJSX.ElsaWorkflowEditorNotifications & JSXBase.HTMLAttributes<HTMLElsaWorkflowEditorNotificationsElement>;
            "elsa-workflow-instances-list-screen": LocalJSX.ElsaWorkflowInstancesListScreen & JSXBase.HTMLAttributes<HTMLElsaWorkflowInstancesListScreenElement>;
            "elsa-workflow-publish-button": LocalJSX.ElsaWorkflowPublishButton & JSXBase.HTMLAttributes<HTMLElsaWorkflowPublishButtonElement>;
            "elsa-workflow-settings-modal": LocalJSX.ElsaWorkflowSettingsModal & JSXBase.HTMLAttributes<HTMLElsaWorkflowSettingsModalElement>;
        }
    }
}
