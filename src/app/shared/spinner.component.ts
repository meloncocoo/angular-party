import { Component, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'shared-spinner',
    template: `
        <div [hidden]="!loading" class="spinner"></div>
    `
})
export class SpinnerComponent implements OnDestroy {
    constructor() { }

    @Input()
    public set loading(value: boolean) {
        
    }

    ngOnDestroy(): any {

    }
}