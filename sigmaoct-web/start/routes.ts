/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/register', async ({ view }) => {
  return view.render('register/view')
})
  
Route.post('/register', async ({ request }) => {
  request.body()
})


Route.get('/login', async ({ view }) => {
  return view.render('login/view')
})

Route.get('/dashboard', async ({ view }) => {
  return view.render('dashboard/view')
})

Route.get('/update', async ({ view }) => {
  return view.render('update/view')
})

Route.get('/delete', async ({ view }) => {
  return view.render('delete/view')
})

