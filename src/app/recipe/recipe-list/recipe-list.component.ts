import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Dummy', 'Dummy',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com' +
    '%2Fphotos%2Fviennese-schnitzel-picture-id119077381%3Fk%3D6%26m%3D119077381' +
    '%26s%3D612x612%26w%3D0%26h%3DRetJ6K-z9munNObQtNTpN_xAt2fLBd3DAn_v4RlCqrg' +
    '%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fat%2Ffotos' +
    '%2Fschnitzel&docid=vqHfmxPyBVt2kM&tbnid=Qzmz2MZbo4KUOM' +
    '%3A&vet=10ahUKEwjIvuOrvYzjAhWE8eAKHek1DjYQMwhTKAAwAA..i&w=' +
    '612&h=430&client=safari&bih=1266&biw=845&q=bild' +
    '%20Schnitzel&ved=0ahUKEwjIvuOrvYzjAhWE8eAKHek1DjYQMwhTKAAwAA&iact=mrc&uact=8')
  constructor() { }

  ngOnInit() {
  }

}
