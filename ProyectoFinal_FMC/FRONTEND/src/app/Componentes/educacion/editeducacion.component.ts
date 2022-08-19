import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private SEducacion: SEducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEducacion.detail(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert("Error al Modidificar");
      this.router.navigate(['home']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEducacion.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['home']);
    }, err => {
      alert("Error al modificar la educacion");
      this.router.navigate(['home']);
    }
    )
  }


}
