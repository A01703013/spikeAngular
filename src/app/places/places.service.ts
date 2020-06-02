import { Injectable } from '@angular/core';
import { Place } from './place.model';

/*The provided in root in @Injectable means it can be used from anywhere*/
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of NYC.', 
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg', 
      149.99
    ),
    new Place(
      'p2', 
      'L\'Amour Tojours', 
      'A romantic place in Paris!', 
      'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://www.56paris.com/wp-content/uploads/2018/06/avenue-Foch-17-1024x684.jpg',
      189.99
    ),
    new Place(
      'p3', 
      'The foggy place', 
      'Not your average city trip...', 
      'https://images.adsttc.com/media/images/5b85/3575/f197/ccae/d200/0019/slideshow/33_BESONIAS_ALMEIDA-CASA-BOSQUE-PH_FEDERICO_KULEKDJIAN.jpg?1535456620',
      69.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id:string){
    return {...this._places.find(p => p.id === id)};
  }
}