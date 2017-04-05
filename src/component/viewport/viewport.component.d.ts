import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
export declare class DejaViewPortComponent implements OnDestroy, AfterViewInit {
    private changeDetectorRef;
    itemSizeMode: 'fixed' | 'auto';
    itemSize: string;
    protected beforeSize: string;
    protected afterSize: string;
    protected vpItems: DejaViewPortItem[];
    protected vpStartIndex: number;
    protected startOffset: number;
    private _items;
    private element;
    private subscriptions;
    private lastScrollPos;
    private isHorizontal;
    private hasButtons;
    private hasButtons$;
    private _scrollPos;
    private buttonsStep;
    private mouseDown$Sub;
    private mouseWheel$Sub;
    private hasUpButton;
    private hasDownButton;
    private _direction;
    private _scrollingStyle;
    private scrolling;
    itemTemplateExternal: any;
    private itemTemplateInternal;
    private itemElements;
    private wrapperElement;
    private downButton;
    private upButton;
    items: any[];
    scrollingStyle: 'scrollbar' | 'buttons';
    direction: 'vertical' | 'horizontal';
    private readonly itemTemplate;
    private readonly clientSize;
    private scrollPos;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ensureVisible(item: any): void;
    private calcViewPort(maxSize?);
    private clearViewPort();
}
export declare class DejaViewPortItem {
    model: any;
    size: number;
    constructor(model: any, size?: number);
}
