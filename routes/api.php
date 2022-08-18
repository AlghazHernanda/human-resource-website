<?php

use App\Http\Controllers\HRController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//protected route
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [HRController::class, 'logout']);
});
//Hr register and login 
Route::post('/register', [HRController::class, 'store']);
Route::get('/index', [HRController::class, 'index']);
Route::post('/login', [HRController::class, 'authenticate']);
//storeRole
Route::post('/storeRole', [HRController::class, 'storeRole']);
//storedivision
Route::post('/storeDivision', [HRController::class, 'storeDivision']);

// Route::post('/register', function (Request $request) {
//     return "halo";
// });
