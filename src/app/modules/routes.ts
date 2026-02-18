import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/dashboard/dashboard.component').then(
                (m) => m.DashboardComponent
            ),
    },
    {
        path: 'email-template',
        loadComponent: () =>
            import('./pages/email-template/email-template.component').then(
                (m) => m.EmailTemplateComponent
            ),
    },
    {
        path: 'location',
        loadComponent: () =>
            import('./pages/locations/locations.component').then(
                (m) => m.LocationsComponent
            ),
    },
    {
        path: 'logo-management',
        loadComponent: () =>
            import('./pages/logo-management/logo-management.component').then(
                (m) => m.LogoManagementComponent
            ),
    },
    {
        path: 'media',
        loadComponent: () =>
            import('./pages/media/media.component').then(
                (m) => m.MediaComponent
            ),
    },
    {
        path: 'payment',
        loadComponent: () =>
            import('./pages/payment-gateway/payment-gateway.component').then(
                (m) => m.PaymentGatewayComponent
            ),
    },
    {
        path: 'profile',
        loadComponent: () =>
            import('./pages/profile/profile.component').then(
                (m) => m.ProfileComponent
            ),
    },
    {
        path: 'revenue',
        loadComponent: () =>
            import('./pages/revenue/revenue.component').then(
                (m) => m.RevenueComponent
            ),
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./pages/settings/settings.component').then(
                (m) => m.SettingsComponent
            ),
    },
    {
        path: 'user',
        loadComponent: () =>
            import('./pages/user/user.component').then(
                (m) => m.UserComponent
            ),
    },
    {
        path: 'pages',
        children: [
            {
                path: 'add',
                loadComponent: () => import('./pages/pages/add/add.component').then((m) => m.AddComponent),
            },
            {
                path: 'manage',
                loadComponent: () => import('./pages/pages/manage/manage.component').then((m) => m.ManageComponent),
            },
        ]
    },
    {
        path: 'support',
        children: [
            {
                path: 'reply',
                loadComponent: () => import('./pages/support/reply/reply.component').then((m) => m.ReplyComponent),
            },
            {
                path: 'list',
                loadComponent: () => import('./pages/support/list/list.component').then((m) => m.ListComponent),
            },
        ]
    },
    {
        path: 'plans',
        children: [
            {
                path: 'add',
                loadComponent: () => import('./pages/plans/add/add.component').then((m) => m.AddComponent),
            },
            {
                path: 'manage',
                loadComponent: () => import('./pages/plans/manage/manage.component').then((m) => m.ManageComponent),
            },
        ]
    },
    {
        path: 'stores',
        children: [
            {
                path: 'add',
                loadComponent: () => import('./pages/stores/add/add.component').then((m) => m.AddComponent),
            },
            {
                path: 'manage',
                loadComponent: () => import('./pages/stores/manage/manage.component').then((m) => m.ManageComponent),
            },
        ]
    },
]
