import { Routes } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { IRoleType } from './interfaces';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SigUpComponent } from './pages/auth/sign-up/signup.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GamesComponent } from './pages/games/games.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'signup',
    component: SigUpComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'app',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[AdminRoleGuard],
        data: { 
          authorities: [
            IRoleType.admin, 
            IRoleType.superAdmin
          ],
          name: 'Users',
          showInSidebar: true
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { 
          authorities: [
            IRoleType.admin, 
            IRoleType.superAdmin,
            IRoleType.user
          ],
          name: 'Dashboard',
          showInSidebar: false
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { 
          authorities: [
            IRoleType.admin, 
            IRoleType.superAdmin,
            IRoleType.user
          ],
          name: 'profile',
          showInSidebar: false
        }
      },
      {
        path: 'games',
        component: GamesComponent,
        data: { 
          authorities: [
            IRoleType.admin, 
            IRoleType.superAdmin,
            IRoleType.user,
          ],
          name: 'games',
          showInSidebar: false
        }
      },
      {
        path: 'productos',
        component: ProductosComponent,
        data: { 
          authorities: [
            IRoleType.admin, 
            IRoleType.superAdmin,
            IRoleType.user
          ],
          name: 'productos',
          showInSidebar: true
        }
      },
      {
        path: 'Categoria',
        component: CategoriasComponent,
        data: {
          authorities: [
            IRoleType.admin,
            IRoleType.superAdmin,
            IRoleType.user
          ],
          name: 'categorias',
          showInSidebar: true
        }
      }
    ],
  },
];
