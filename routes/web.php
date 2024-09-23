<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// INERTIA Type
// Route::get('/', function () {
//     sleep(3);
//     return Inertia::render('Home', ['name' => 'Dan']);
// });

// Route::inertia('/', 'Home');

// GET /
Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

