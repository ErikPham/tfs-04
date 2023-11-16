import { extend } from '@/shared';

export const createHttp = (config) => {
    const baseURL = config.base;
    const http = {
        async request(url, options = { method: 'GET' }) {
            const method = options.method || 'GET'
            const headers = options.headers || {}
            const body = options.body || undefined
            const responseType = options.responseType || 'json'
            const requestUrl = url.startsWith('http') ? url : `${baseURL}${url}`
            const response = await fetch(requestUrl, {
                method,
                headers,
                body: body ? JSON.stringify(body) : undefined,
            });
            if (response.ok) {
                switch (responseType) {
                    case 'json':
                        return response.json();
                    case 'text':
                        return response.text();
                    case 'blob':
                        return response.blob();
                }
            }
        },
        post(url, options = {}) {
            return http.request(url, extend(options, { method: 'POST' }))
        },
        get(url, options = {}) {
            return http.request(url, extend(options, { method: 'GET' }))
        },
        delete(url, options = {}) {
            return http.request(url, extend(options, { method: 'delete' }))
        },
        patch(url, options = {}) {
            return http.request(url, extend(options, { method: 'PATCH' }))
        }
    }

    return http;
}
