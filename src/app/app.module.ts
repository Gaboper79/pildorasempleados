import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EmpleadosService } from "./empleados.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpleadoHijoCComponent } from "./empleado-hijo-c/empleado-hijo-c.component";
import { CaracteristicasEmpleadoCComponent } from "./caracteristicas-empleado-c/caracteristicas-empleado-c.component";
import { HomeComponentComponent } from "./home-component/home-component.component";

import { ProyectosComponentComponent } from "./proyectos-component/proyectos-component.component";
import { ContactoComponentComponent } from "./contacto-component/contacto-component.component";
import { QuienesComponentComponent } from "./quienes-component/quienes-component.component";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    QuienesComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
