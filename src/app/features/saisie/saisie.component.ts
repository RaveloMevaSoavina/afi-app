import { Component, OnInit } from '@angular/core';

interface Civility {label : string , value: string}

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss']
})
export class SaisieComponent implements OnInit {
  civilities : Civility[];
  civility !: Civility;

  constructor() {
    this.civilities = [
      {label : "Monsieur", value : "mr"},
      {label : "Madame", value : "mme"},
      {label : "Mademoiselle", value : "mlle"},
    ]
   }

  ngOnInit(): void {
  }

}
