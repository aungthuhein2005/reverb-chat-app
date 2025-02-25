<?php

use App\Events\MessageSent;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageSentController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/users', function(){
    return response()->json([
        'users' => User::where('id', '!=', auth()->id())->get()
    ]);
})->middleware('auth:sanctum');

Route::post('/messages', [MessageSentController::class, 'sent'])->middleware('auth:sanctum');
Route::get('/messages', [MessageSentController::class, 'getMessages'])->middleware('auth:sanctum');