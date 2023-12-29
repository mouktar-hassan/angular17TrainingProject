import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  constructor(private route: ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const index = params.get('id');
      // Utilisez `index` pour charger les données de l'employé
    });
  }

  /*

  updateEmployee(form: NgForm) {
    this.listEmployee[this.selectedIndex] = this.selectedEmployee;
    // Autres logiques comme la fermeture du formulaire ou la mise à jour du serveur
  }
  */
}
