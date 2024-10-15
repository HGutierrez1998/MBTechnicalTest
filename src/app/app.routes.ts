import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./authentication/login/login.component')
    },
    {
        path: 'brand-building',
        loadComponent: () => import('./authentication/brand-building/brand-building.component')
    },
    {
        path: 'layout',
        loadComponent: () => import('./layout/layout.component'),
        children : [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component')
            },
            {
                path: 'product-user',
                loadComponent: () => import('./pages/product-user/product-user.component')
            },
            {
                path: 'user-shopp',
                loadComponent: () => import('./pages/user-shopping-car/user-shopping-car.component')
            },
            {
                path: 'finish-purchase',
                loadComponent: () => import('./pages/finish-purchase/finish-purchase.component')
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
