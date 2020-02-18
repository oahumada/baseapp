<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::post('login', 'PassportController@login');
Route::post('register', 'PassportController@register');*/
 
Route::middleware('auth:api')->prefix('auth')->group(function(){
        Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

/*
Route::group(array('prefix' => 'app'), function () {
    Route::resource('shows', function(){
        
    });
    Route::resource('episode', 'EpisodesApiController');
    Route::resource('genre', 'GenresApiController');
});*/