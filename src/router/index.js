// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Home
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue'),
            meta: {
                title: 'Home',
                description: 'Community Impact Network - Making a difference in communities'
            }
        },

        // About Us
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutView.vue'),
            meta: {
                title: 'About Us',
                description: 'Learn about our mission, vision, and the impact we make'
            }
        },

        // Gallery
        {
            path: '/gallery',
            name: 'Gallery',
            component: () => import('@/views/GalleryView.vue'),
            meta: {
                title: 'Gallery',
                description: 'Explore our work through photos and videos'
            }
        },

        // Get Involved
        {
            path: '/get-involved',
            name: 'GetInvolved',
            component: () => import('@/views/GetInvolvedView.vue'),
            meta: {
                title: 'Get Involved',
                description: 'Join us in making a difference - volunteer, donate, or partner with us'
            }
        },

        // Contact
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('@/views/ContactView.vue'),
            meta: {
                title: 'Contact Us',
                description: 'Get in touch with the CIN team'
            }
        },

        // Latest News
        {
            path: '/latest-news',
            name: 'LatestNews',
            component: () => import('@/views/NewsView.vue'),
            meta: {
                title: 'Latest News',
                description: 'Stories, updates, and insights from CIN'
            }
        },

        // Latest Details News
        {
            path: '/latest-news/:slug',
            name: 'LatestNewsDetail',
            component: () => import('@/views/NewsDetailView.vue'),
            meta: {
                title: 'Latest News',
                description: 'Stories, updates, and insights from CIN'
            }
        },

        // 404 Not Found
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/errors/NotFoundView.vue'),
            meta: {
                title: 'Page Not Found'
            }
        }
    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80
            }
        }
        return { top: 0, behavior: 'smooth' }
    }
})

router.beforeEach((to, from, next) => {
    const baseTitle = 'CIN - Community Impact Network'
    document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && to.meta.description) {
        metaDescription.setAttribute('content', to.meta.description)
    }

    next()
})

export default router