import { Component, OnInit } from '@angular/core';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

interface Navigation {label : string, value: string}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // Storing Date value
    todayDate: Date = new Date();

    // Store if On mousemove event 
    changeText!: boolean;

    // FontAwesome icons
    faUsers = faUsers;
    faPowerOff = faPowerOff;

    navigations : Navigation[];
    selectedNavigation !: Navigation;

  constructor() { 
    this.changeText = false;
    this.navigations = [
      {label : 'Via Telecom', value : 'telecom'},
      {label : 'Smalltox', value : 'smalltox'},
      {label : 'AutoRedirect', value : 'autoredirect'},
      {label : 'Afi Actualités', value : 'actus'},
      {label : 'ModulR Contrats', value : 'contrats'},
    ]
  }

  ngOnInit(): void {
  }

}
