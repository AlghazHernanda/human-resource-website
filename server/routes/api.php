<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HRController;
use App\Http\Controllers\ProgramController;
use App\Models\Employee;
use App\Models\Program;
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

//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 github acces token

//protected route 
Route::group(['middleware' => ['jwt.verify', 'cors']], function () {
    //kalo pake jwt.verify, misal gaada token langsung ada error handling nya

    //hrController
    Route::post('/logout', [HRController::class, 'logout']);
    Route::get('/index', [HRController::class, 'index']);
    Route::post('/register', [HRController::class, 'store']);
    //storeRole
    Route::post('/storeRole', [HRController::class, 'storeRole']);
    //storedivision
    Route::post('/storeDivision', [HRController::class, 'storeDivision']);
    //storeEmployee
    Route::post('/storeEmployee', [HRController::class, 'storeEmployee']);



    //route EmployeeController
    Route::post('/logoutEmployee', [EmployeeController::class, 'logout']);

    //route program
    Route::get('/program', [ProgramController::class, 'index']);
    Route::post('/storeProgram', [ProgramController::class, 'store']);
    Route::put('/editProgram/{program:id}', [ProgramController::class, 'update']);
    Route::delete('/deleteProgram/{program:id}', [ProgramController::class, 'destroy']);
});

//hrControlller
//register hr
Route::post('/register', [HRController::class, 'store']);
Route::post('/login', [HRController::class, 'authenticate']);




//route EmployeeController
Route::get('/programEmployee', [EmployeeController::class, 'index']);
Route::post('/loginEmployee', [EmployeeController::class, 'authenticate']);

Route::get('/editEmployee/{employee:id}', [EmployeeController::class, 'edit']);
Route::put('/editEmployee/{employee:id}', [EmployeeController::class, 'update']);


//program
Route::get('/editProgram/{program:id}', [ProgramController::class, 'edit']);




// Route::post('/register', function (Request $request) {
//     return "halo";
// });
