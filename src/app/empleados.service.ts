import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable({
  providedIn: "root",
})
export class EmpleadosService {
  constructor(private _ventanaEmergenteSvc: ServicioEmpleadosService) {}

  Empleados: Empleado[] = [
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Gabriel", "Perdomo", "CEO", 500),
    new Empleado("Laura", "Lopez", "Secretaria", 550),
    new Empleado("Eluney", "Perdomo", "Dirigente", 400),
  ];

  agregarEmpleadoSvc(empleado: Empleado) {
    this._ventanaEmergenteSvc.muestraMensaje(empleado.nombre);
    this.Empleados.push(empleado);
  }
}
