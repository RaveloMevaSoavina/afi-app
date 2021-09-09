import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MenuItem} from 'primeng/api';

interface Civility {label : string , value: string}
interface WishConseil { label : string , value: string}

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss']
})
export class SaisieComponent implements OnInit {
  pageTitle !: string;
  civilities : Civility[];
  civility !: Civility;

  wish : WishConseil[];

  items!: MenuItem[];
  activeItem!: MenuItem;

  trueOrFalse : any[];



  constructor( private titleService: Title ) {

    this.pageTitle = "Santé | Saisie IGD"
    this.civilities = [
      {label : ' ', value : " "},
      {label : "Monsieur", value : "mr"},
      {label : "Madame", value : "mme"},
      {label : "Mademoiselle", value : "mlle"},
    ]

    this.items = [
      {label: 'Santé'},
      {label: 'Prévoyance'},
  ];

  this.activeItem = this.items[0];

  this.trueOrFalse = [ { key : 0 , label : 'oui', value : true}, { key : 1, label : 'non', value : false}]

  this.wish = [
    { label : "Non renseigné" , value: "undefined"},
    { label : "Aucun" , value: "null"},
    { label : "Minimum (100%)" , value: ">100%"},
    { label : "Moyen (100% à 150%)" , value: "[100-150]"},
    { label : "Fort (151% à 200%)" , value: "[151-200]"},
    { label : "maxi (+201%)" , value: "+201"},
  ]
}

  

  ngOnInit(): void {
    this.setTitle(this.pageTitle);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
