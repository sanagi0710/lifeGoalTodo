<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;


// Todo APIエンドポイント
Route::post('/api/todo', [TodoController::class, 'setTodo']);
Route::get('/api/todo', [TodoController::class, 'index']);


// フロントエンドのすべてのリクエストをキャッチするルート
Route::get('{any}', function () {
    return view('app');
})->where('any','.*');
