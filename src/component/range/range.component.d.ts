import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IRange, IStepRangeEvent } from './range.interface';
export declare class DejaRangeComponent implements ControlValueAccessor {
    private changeDetectorRef;
    private elementRef;
    step: number | number[] | ((event: IStepRangeEvent) => number);
    selected: number;
    select: EventEmitter<any>;
    errorFeedback: EventEmitter<any>;
    protected rangeTemplate: any;
    protected separatorTemplate: any;
    private minimumRangePercentage;
    private _readOnly;
    private _disabled;
    private _ranges;
    _onChangeCallback: (_: any) => void;
    _onTouchCallback: () => void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ranges: IRange[];
    disabled: boolean;
    readOnly: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    writeValue(ranges: IRange[]): void;
    onResize(): void;
    add(): void;
    remove(): void;
    protected onSelect(e: Event, index: number): void;
    protected onMouseDown($event: MouseEvent, index: number): void;
    private toStep(ranges, index, newMax);
}
