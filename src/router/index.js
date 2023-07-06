import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/LokasiW.vue';
import Photo from '../components/PhotoW.vue';
import Stopwatch from '../components/StopwatchW.vue';
import Game from '../components/GameW.vue';

const routes = [
  { path: '/', component: Lokasi },
  { path: '/photow', component: Photo },
  { path: '/stopwatchw', component: Stopwatch},
  { path: '/gamew', component: Game},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;