/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { Component } from '@angular/core';

@Component({
    selector: 'message-box-demo',
    styleUrls: ['./message-box-demo.scss'],
    templateUrl: './message-box-demo.html',
})
export class DejaMessageBoxDemoComponent {
    public tabIndex = 1;

    protected toolTipModel = {
        text: 'Je suis un deja-tooltip'
    };

    protected actions = [
        {
            action: () => {
                this.dialogTitle = '<b>I am a deja-dialog !</b><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet felis id nisl maximus interdum. Morbi mollis sapien sapien. Vivamus lacinia elementum eros';
            },
            text: 'Cliquez moi pour ouvrir une deja-dialog',
            type: 'primary',
        },
        {
            action: () => alert('test action'),
            text: 'test sans icon',
        },
        {
            action: () => alert('test action'),
            type: 'danger',
        },
    ];

    protected closeAction = [
        {
            action: () => alert('test action'),
            icon: 'clear',
        },
    ];

    public dialogTitle: string;

    constructor() { }

}
