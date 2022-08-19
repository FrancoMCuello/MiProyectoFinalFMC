import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string ='';
  descripcionE: string ='';


  constructor(private sEducacion: SEducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data=>{ 
        alert("Eduacion añadida correctamente");
        this.router.navigate(['home']);
  }, err => { alert("Falló");
              this.router.navigate(['home']);
            }
          )
         }


}
