// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AcercaD } from 'src/app/model/acerca-d';
// import { SAcercadService } from 'src/app/service/sacercad.service';

// @Component({
//   selector: 'app-edit-acerca-d',
//   templateUrl: './edit-acerca-d.component.html',
//   styleUrls: ['./edit-acerca-d.component.css']
// })
// export class EditAcercaDComponent implements OnInit {

//   acercad : AcercaD = null;
//   constructor(
//     private Sacercad:SAcercadService,
//     private activatedRouter : ActivatedRoute,
//     private router: Router,
//   ) { }

//   ngOnInit(): void {
//     const id = this.activatedRouter.snapshot.params['id'];
//     this.Sacercad.detail(id).subscribe(data => {
//       this.acercad = data;
//     }, err => {
//       alert("Error al Modidificar");
//       this.router.navigate(['home']);
//     })
//   }

//   onUpdate(): void {
//     const id = this.activatedRouter.snapshot.params['id'];
//     this.Sacercad.update(id, this.acercad).subscribe(data => {
//       this.router.navigate(['home']);
//     }, err => {
//       alert("Error al modificar la persona, compruebe ser el administrador");
//       this.router.navigate(['home']);
//     }
//     )
//   }
// }
