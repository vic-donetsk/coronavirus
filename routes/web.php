<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// goto vue router
Route::get('/', "Controller@index");
Route::get('/{level1}', "Controller@index");
Route::get('/{level1}/{level2}', "Controller@index");
Route::get('/{level1}/{level2}/{level3}', "Controller@index");
