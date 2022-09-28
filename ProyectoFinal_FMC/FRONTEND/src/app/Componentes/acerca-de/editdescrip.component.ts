import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editdescrip',
  templateUrl: './editdescrip.component.html',
  styleUrls: ['./editdescrip.component.css']
})
export class EditdescripComponent implements OnInit {
  persona : Persona = null;

  constructor(
    private SEPersona: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEPersona.detail(id).subscribe(data => {
      this.persona = data;
    }, err => {
      alert("Error al Modidificar");
      this.router.navigate(['home']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEPersona.update(id, this.persona).subscribe(data => {
      this.router.navigate(['home']);
    }, err => {
      alert("Error al modificar la persona, compruebe ser el administrador");
      this.router.navigate(['home']);
    }
    )
  }
}
