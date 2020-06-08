import {h, Component, Prop } from "@stencil/core";

@Component({
    tag: 'hcw-blue-button',
    styleUrl: './hcw-blue-button.css',
    shadow: true
})

export class HCWBlueButton {

    render() {
        return [
            <button class="left"><slot></slot></button>
        ]
    }
}