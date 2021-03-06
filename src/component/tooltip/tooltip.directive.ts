/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { DejaConnectionPositionPair } from '../../common/core/overlay/connection-position-pair';
import { DejaTooltipService } from './tooltip.service';

@Directive({
    selector: '[deja-tooltip]',
})
export class DejaTooltipDirective {
    @Input('tooltip-delay') public delay = 600;
    @Input('tooltip-model') public model: any;
    @Input('deja-tooltip') public name: string;
    @Input('tooltip-positions') public positions: DejaConnectionPositionPair | string;

    // tslint:disable-next-line:no-output-rename
    @Output('tooltip-show') public show = new EventEmitter();

    constructor(elementRef: ElementRef, tooltipService: DejaTooltipService) {
        const element = elementRef.nativeElement as HTMLElement;

        const leave$ = Observable.fromEvent(element, 'mouseleave');

        Observable.fromEvent(element, 'mouseenter')
            .switchMap((e) => Observable.of(e).delay(this.delay).takeUntil(leave$))
            .subscribe(() => {
                tooltipService.params[this.name] = {
                    model: this.model,
                    ownerElement: elementRef,
                    positions: this.positions,
                };

                this.show.emit();
            });
    }
}
