import { Injectable } from '@angular/core';

@Injectable()
export class GlyphService {
    constructor() { }

    public get arrowUp() : string {
        return String.fromCharCode(0xf0aa);
    }
    
    public get arrowDown() : string {
        return String.fromCharCode(0xf0ab);
    }
}