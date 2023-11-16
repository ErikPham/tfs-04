import { createHttp } from './services';

(async function  (){
    const http = createHttp({ base: 'https://jsonplaceholder.typicode.com' })
    console.log('getTodos', await http.get('/todos/1'))
    const result = await http.request('/posts', {
        method: 'POST',
        body: {
            title: 'OCG',
            body: 'Training',
            userId: 1,
        }
    });
    console.log('result', result);
})()

