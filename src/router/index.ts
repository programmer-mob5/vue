import { Component } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LayoutAuth from '@/layout/LayoutAuth.vue';
import LayoutAssets from '@/layout/LayoutAssets.vue';
import Components from '@/views/Components.vue';
import getUserData from '@/utils/getUserData.utils';
import verifyUserLoggedIn from '@/utils/users/verifyUserLoggedIn.util';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: LayoutAuth,
    redirect: '/login',
    beforeEnter: () => {
      if (getUserData) {
        router.push('/assets');
      }
    },
    children: [
      {
        path: '/login',
        name: 'LoginPage',
        component: (): Promise<Component> =>
          import('@/views/auth/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/assets',
    component: LayoutAssets,
    beforeEnter: async (to, from) => {
      try {
        const res = await verifyUserLoggedIn(getUserData.token);
        if (!res) {
          router.push('/');
        }
        return res;
      } catch (error) {
        router.push('/');
        return false;
      }
    },
    children: [
      {
        path: '/assets',
        name: 'AssetsPage',
        component: (): Promise<Component> =>
          import('@/views/assets/AssetsPage.vue'),
      },
    ],
  },
  {
    path: '/components',
    component: Components,
  },
];

const router = createRouter({
  history: createWebHistory((import.meta.env || process.env).BASE_URL),
  routes,
});

export default router;
