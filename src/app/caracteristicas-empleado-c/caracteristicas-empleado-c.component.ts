import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ServicioEmpleadosService } from "../servicio-empleados.service";

@Component({
  selector: "app-caracteristicas-empleado-c",
  templateUrl: "./caracteristicas-empleado-c.component.html",
  styleUrls: ["./caracteristicas-empleado-c.component.scss"],
})
export class CaracteristicasEmpleadoCComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  constructor(private miServicio: ServicioEmpleadosService) {}

  ngOnInit(): void {}

  agregaCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);
  }
}
