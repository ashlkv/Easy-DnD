import {Vue} from "vue-property-decorator";

export class DnDEvent {

    type: any;
    data: any;
    top: Vue;
    previousTop: Vue;
    source: Vue;
    position: { x, y };
    success: Boolean;
    native: TouchEvent | MouseEvent;

}

export class ReorderEvent extends DnDEvent {
    to: number;
    from: number;

    constructor(from: number, to: number, event?: DnDEvent) {
        super();
        Object.assign(this, event);
        this.to = to;
        this.from = from;
    }

    apply(array: any[]) {
        let tmp = array[this.from];
        array.splice(this.from, 1);
        array.splice(this.to, 0, tmp);
    }

}

export class InsertEvent extends DnDEvent {
    type: any;
    data: any;
    index: number;

    constructor(type: any, data: any, index: number, event?: DnDEvent) {
        super();
        Object.assign(this, event);
        this.type = type;
        this.data = data;
        this.index = index;
    }

}

export class LeaveEvent extends DnDEvent {
    index: number;

    constructor(index: number, event?: DnDEvent) {
        super();
        Object.assign(this, event);
        this.index = index;
    }
}
