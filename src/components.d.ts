/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EnfermNotificaciones {
        "opened": boolean;
    }
    interface HcwBlueButton {
    }
    interface HcwCama {
    }
    interface HcwInformeInternados {
    }
    interface HcwMenu {
    }
    interface UcSideDrawer {
        "open": boolean;
        "title": string;
    }
}
declare global {
    interface HTMLEnfermNotificacionesElement extends Components.EnfermNotificaciones, HTMLStencilElement {
    }
    var HTMLEnfermNotificacionesElement: {
        prototype: HTMLEnfermNotificacionesElement;
        new (): HTMLEnfermNotificacionesElement;
    };
    interface HTMLHcwBlueButtonElement extends Components.HcwBlueButton, HTMLStencilElement {
    }
    var HTMLHcwBlueButtonElement: {
        prototype: HTMLHcwBlueButtonElement;
        new (): HTMLHcwBlueButtonElement;
    };
    interface HTMLHcwCamaElement extends Components.HcwCama, HTMLStencilElement {
    }
    var HTMLHcwCamaElement: {
        prototype: HTMLHcwCamaElement;
        new (): HTMLHcwCamaElement;
    };
    interface HTMLHcwInformeInternadosElement extends Components.HcwInformeInternados, HTMLStencilElement {
    }
    var HTMLHcwInformeInternadosElement: {
        prototype: HTMLHcwInformeInternadosElement;
        new (): HTMLHcwInformeInternadosElement;
    };
    interface HTMLHcwMenuElement extends Components.HcwMenu, HTMLStencilElement {
    }
    var HTMLHcwMenuElement: {
        prototype: HTMLHcwMenuElement;
        new (): HTMLHcwMenuElement;
    };
    interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {
    }
    var HTMLUcSideDrawerElement: {
        prototype: HTMLUcSideDrawerElement;
        new (): HTMLUcSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "enferm-notificaciones": HTMLEnfermNotificacionesElement;
        "hcw-blue-button": HTMLHcwBlueButtonElement;
        "hcw-cama": HTMLHcwCamaElement;
        "hcw-informe-internados": HTMLHcwInformeInternadosElement;
        "hcw-menu": HTMLHcwMenuElement;
        "uc-side-drawer": HTMLUcSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface EnfermNotificaciones {
        "opened"?: boolean;
    }
    interface HcwBlueButton {
    }
    interface HcwCama {
    }
    interface HcwInformeInternados {
    }
    interface HcwMenu {
    }
    interface UcSideDrawer {
        "open"?: boolean;
        "title"?: string;
    }
    interface IntrinsicElements {
        "enferm-notificaciones": EnfermNotificaciones;
        "hcw-blue-button": HcwBlueButton;
        "hcw-cama": HcwCama;
        "hcw-informe-internados": HcwInformeInternados;
        "hcw-menu": HcwMenu;
        "uc-side-drawer": UcSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "enferm-notificaciones": LocalJSX.EnfermNotificaciones & JSXBase.HTMLAttributes<HTMLEnfermNotificacionesElement>;
            "hcw-blue-button": LocalJSX.HcwBlueButton & JSXBase.HTMLAttributes<HTMLHcwBlueButtonElement>;
            "hcw-cama": LocalJSX.HcwCama & JSXBase.HTMLAttributes<HTMLHcwCamaElement>;
            "hcw-informe-internados": LocalJSX.HcwInformeInternados & JSXBase.HTMLAttributes<HTMLHcwInformeInternadosElement>;
            "hcw-menu": LocalJSX.HcwMenu & JSXBase.HTMLAttributes<HTMLHcwMenuElement>;
            "uc-side-drawer": LocalJSX.UcSideDrawer & JSXBase.HTMLAttributes<HTMLUcSideDrawerElement>;
        }
    }
}
