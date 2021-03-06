/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DejaIFrameComponent } from './iframe.component';

@NgModule({
    declarations: [DejaIFrameComponent],
    exports: [DejaIFrameComponent],
    imports: [CommonModule],
})
export class DejaIFrameModule { }

export * from './iframe.component';
