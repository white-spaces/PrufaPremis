import { Component, NgZone } from '@angular/core';
import { FrettService } from '../frett.service';
import { Frett } from '../frettir';

@Component({
    selector: 'frettir-listi',
    templateUrl: './frettir-listi.component.html' ,
    styleUrls: ['./frettir-listi.component.css', './responsive-frettir-listi.css'] 
})

export class FrettirListiComponent {


    activeCategory: any = undefined;


    frettir: Frett[]

    constructor(
        public frettService: FrettService,
        public zone: NgZone) 
    { 
        // initially not category will be shown
        this.frettir = frettService.getFrettir(undefined);
    }


    filterCategories(cat){
        this.zone.run(() => {
            // call filter function from service everytime a category is picked
            this.frettir = this.frettService.getFrettir(cat);
            this.activeCategory = cat;
        })
    }
}