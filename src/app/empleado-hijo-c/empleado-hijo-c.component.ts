import { Component, Input, OnInit } from "@angular/core";
import { Empleado } from "../empleado.model";

@Component({
  selector: "app-empleado-hijo-c",
  templateUrl: "./empleado-hijo-c.component.html",
  styleUrls: ["./empleado-hijo-c.component.scss"],
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDelista!: Empleado;
  @Input() indice!: number;
  constructor() {}

  ngOnInit(): void {}
  arrayCaracteristicas: String[] = [""];
  agregarCaracteristica(nuevaCaracterisica: String) {
    this.arrayCaracteristicas.push(nuevaCaracterisica);
  }
}
