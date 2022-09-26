import { Component, OnInit } from '@angular/core';
// import { AcercaD } from 'src/app/model/acerca-d';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';
// import { SAcercadService } from 'src/app/service/sacercad.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona  = new Persona("", "", "", "");
  // acercad: AcercaD = new AcercaD("");

  constructor(public personaService: PersonaService, ) { } 
  
  ngOnInit(): void {
    
    this.personaService.detail(1).subscribe(data => {this.persona = data})
    

  }

}

// public acercaService: SAcercadService