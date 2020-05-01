/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Shkun Accountin Software
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/',
                    redirect: '/pages/login'
                },
                {
                    path: '/dashboard/analytics',
                    name: 'dashboard-analytics',
                    component: () => import('./views/DashboardAnalytics.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/dashboard/company',
                    name: 'dashboard-company',
                    component: () => import('@/views/apps/user/user-list/UserList.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/company-add',
                    name: 'dashboard-company-add',
                    component: () => import('@/views/skpage/newcompany.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },






                {
                    path: '/dashboard/sale-gst',
                    name: 'dashboard-sale-gst',
                    component: () => import('@/views/ui-elements/data-list/list-view/salegst.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/sale-gstform',
                    name: 'dashboard-sale-gstform',
                    component: () => import('@/views/skpage/salegstform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },


                {
                    path: '/dashboard/purchasegstforms',
                    name: 'dashboard-purchaseform',
                    component: () => import('@/views/skpage/purchasegstform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },


                {
                    path: '/dashboard/cashvoucher',
                    name: 'dashboard-cashform',
                    component: () => import('@/views/skpage/cashform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/cashreceipt',
                    name: 'dashboard-cashform',
                    component: () => import('@/views/skpage/cashformre.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/journal',
                    name: 'dashboard-journal',
                    component: () => import('@/views/skpage/journalform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/bank',
                    name: 'dashboard-bank',
                    component: () => import('@/views/skpage/bankform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/tdsvouchar',
                    name: 'dashboard-tsd',
                    component: () => import('@/views/skpage/tdsvoucharform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },

                {
                    path: '/dashboard/newledger',
                    name: 'dashboard-tsd',
                    component: () => import('@/views/skpage/newledgerform.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },







        // =============================================================================
        // Application Routes
        // =============================================================================
                {
                    path: '/apps/todo',
                    redirect: '/apps/todo/all',
                    name: 'todo',
                },
                {
                    path: '/apps/todo/:filter',
                    component: () => import('./views/apps/todo/Todo.vue'),
                    meta: {
                        rule: 'editor',
                        parent: "todo",
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/chat',
                    name: 'chat',
                    component: () => import('./views/apps/chat/Chat.vue'),
                    meta: {
                        rule: 'editor',
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/email',
                    redirect: '/apps/email/inbox',
                    name: 'email',
                },
                {
                    path: '/apps/email/:filter',
                    component: () => import('./views/apps/email/Email.vue'),
                    meta: {
                        rule: 'editor',
                        parent: 'email',
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/calendar/vue-simple-calendar',
                    name: 'calendar-simple-calendar',
                    component: () => import('./views/apps/calendar/SimpleCalendar.vue'),
                    meta: {
                        rule: 'editor',
                        no_scroll: true,
                    }
                },
               
            
            
                {
                    path: '/apps/user/user-list',
                    name: 'app-user-list',
                    component: () => import('@/views/apps/user/user-list/UserList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'List', active: true },
                        ],
                        pageTitle: 'User List',
                        rule: 'editor'
                    },
                },
                {
                    path: '/apps/user/user-view/:userId',
                    name: 'app-user-view',
                    component: () => import('@/views/apps/user/UserView.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'View', active: true },
                        ],
                        pageTitle: 'User View',
                        rule: 'editor'
                    },
                },
                {
                    path: '/apps/user/user-edit/:userId',
                    name: 'app-user-edit',
                    component: () => import('@/views/apps/user/user-edit/UserEdit.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'User' },
                            { title: 'Edit', active: true },
                        ],
                        pageTitle: 'User Edit',
                        rule: 'editor'
                    },
                },
        // =============================================================================
        // UI ELEMENTS
        // =============================================================================
               
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                {
                    path: '/callback',
                    name: 'auth-callback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/login/Login.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/register',
                    name: 'page-register',
                    component: () => import('@/views/pages/register/Register.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/forgot-password',
                    name: 'page-forgot-password',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'page-reset-password',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'page-lock-screen',
                    component: () => import('@/views/pages/LockScreen.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/comingsoon',
                    name: 'page-coming-soon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'page-not-authorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'page-maintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/StockSummary',
                    name: 'page-StockSummary',
                    component: () => import('@/views/pages/StockSummary.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                
                
        
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        },


            ]
        },


    ]});

    router.afterEach(() => {
        // Remove initial loading
        const appLoading = document.getElementById('loading-bg')
          if (appLoading) {
              appLoading.style.display = "none";
          }})

          export default router;