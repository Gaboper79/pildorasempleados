import { EmpleadosService } from "./empleados.service";
import { Component, OnInit } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    //private miServicio: ServicioEmpleadosService,
    private empleadoSvc: EmpleadosService
  ) {
    //this.empleados = this.empleadoSvc.Empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadoSvc.Empleados;
  }

  title = "Listado de Empleados";
  cuadronombre: string = "";
  cuadroapellido!: string;
  cuadrocargo!: string;
  cuadrosalario: number = 0;
  empleados: Empleado[] = [];
  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadronombre,
      this.cuadroapellido,
      this.cuadrocargo,
      this.cuadrosalario
    );
    //this.miServicio.muestraMensaje("Nombre:" + miEmpleado.nombre);
    this.empleadoSvc.agregarEmpleadoSvc(miEmpleado);
  }
}
