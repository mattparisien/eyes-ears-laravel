<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('posts', 'posts.index', ['title' => 'Posts']);

Route::statamic('site.webmanifest', 'partials._manifest', [
    'layout' => null,
    'content_type' => 'application/json'
]);

Route::statamic('/sitemap.xml', 'partials._sitemap', [
    'layout' => null,
    'content_type' => 'application/xml'
]);

if (env('APP_ENV') !== 'local') {
    URL::forceScheme('https');
}  
