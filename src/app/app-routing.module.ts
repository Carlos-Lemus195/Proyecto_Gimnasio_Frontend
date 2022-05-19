import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEmpleadosComponent } from './components/registro_empleados/registro-empleados/registro-empleados.component';
import { AppComponent } from './app.component';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { RutinaComponent } from './components/rutina/rutina/rutina.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/roles/master/master.component';
import { InstructorComponent } from './components/roles/instructor/instructor.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { PagoPlataformaComponent } from './components/pago-plataforma/pago-plataforma.component';
import { DietaComponent } from './components/dieta/dieta/dieta.component';
import { CreardietaComponent } from './components/dieta/creardieta/creardieta.component';
import { EditardietaComponent } from './components/dieta/editardieta/editardieta.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'RegistroEmpleado', component: RegistroEmpleadosComponent },
  { path: 'master', component: MasterComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'listar-sucursal', component: ListarSucursalComponent },
  { path: 'crear-sucursal', component: SucursalComponent },
  { path: 'editar-sucursal', component: SucursalComponent },
  { path: 'rutinas', component: RutinaComponent },
  { path: 'pagoPlataforma', component: PagoPlataformaComponent },
  { path: 'dietas', component: DietaComponent },
  { path: 'crear_dieta', component: CreardietaComponent },
  { path: 'editar_dieta/:id', component: EditardietaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
