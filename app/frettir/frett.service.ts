import { Injectable, OnInit } from '@angular/core';
import { FRETTIR } from './frettir-mockup';

@Injectable({
  providedIn: 'root'
})
export class FrettService implements OnInit {

  ngOnInit(){
  }

  constructor(){
    
  }


  getFrettir(category) { 
    // Ná í frétta upplýsingar og sýja eftir categoríu
    let frettir = FRETTIR.filter(function(el){
      // ef enginn categoría er valinn, senda allt
      if(category === undefined || null){
        return FRETTIR;
      } else {
        // annars ef category er valinn, senda categoríu
        return el.category == category;
      }
    });
    return frettir;
  }
}
