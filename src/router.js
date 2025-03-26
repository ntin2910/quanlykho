import { createRouter, createWebHistory } from 'vue-router';
import DangNhap from './components/DangNhap.vue';
import QuanLySP from './components/QuanLySP.vue';
import ThemHDNhap from './components/ThemHDNhap.vue';
import ChiTietHDN from './components/ChiTietHDN.vue';
import ThemHDXuat from './components/ThemHDXuat.vue';
import ChiTietHDX from './components/ChiTietHDX.vue';

const routes = [
    {path: "/login",name:"Login",component: DangNhap},
    {path: "/pos01",name:"QuanLySP",component: QuanLySP},
    {path: "/pos02",name:"ThemHDN",component: ThemHDNhap},
    {path: "/pos03",name:"LSN",component: ChiTietHDN},
    {path: "/pos04",name:"ThemHDX",component: ThemHDXuat},
    {path: "/pos05",name:"LSX",component: ChiTietHDX}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;