import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/signals/input/input.component';
import { OutputComponent } from './pages/signals/output/output.component';
import { QueriesComponent } from './pages/signals/queries/queries.component';
import { ModelInputsComponent } from './pages/signals/model-inputs/model-inputs.component';
import { ContentComponent } from './pages/content/content.component';
import { OptimizedImageComponent } from './pages/optimized-image/optimized-image.component';
import { DeferComponent } from './pages/defer/defer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { RedireccionComponent } from './pages/redireccion/redireccion.component';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';
import { ErrorHandler, inject } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProductosComponent,
      },
      {
        path: 'producto/:id',
        component: ProductoComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
    ],
  },
];
