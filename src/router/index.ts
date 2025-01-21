// @ts-nocheck
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router';
import { routes } from './routes';

// createMemoryHistory
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
