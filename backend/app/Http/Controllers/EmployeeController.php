<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\Employee;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            $employee_program = Program::where('employee_id', 1)->get();
            //$employee_program = Program::where('user_id', Auth::user()->id)->get();

            $response = [
                'employee_program' => $employee_program,

            ];
            return response($response, 200);
        } catch (\Throwable $th) {
            //report($th);

            return response($th, 404);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $Employee)
    {
        try {
            $response = [
                'employee' => $Employee,

            ];
            return response($response, 200);
        } catch (\Throwable $th) {
            report($th);

            // return response($th, 404);
        }
    }

    public function authenticate(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // verifikasi email
        $Employee = Employee::where('email', $fields['email'])->first();

        // verifikasi password
        if (!$Employee || !Hash::check($fields['password'], $Employee->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = JWTAuth::fromUser($Employee);

        //Token created, return with success response and jwt token
        return response()->json([
            'success' => true,
            'message' => 'employee succesfull login',
            'token' => $token,
        ]);


        //

        // $credentials = $request->only('email', 'password');

        // //valid credential
        // $validator = Validator::make($credentials, [
        //     'email' => 'required|email',
        //     'password' => 'required|string|min:6|max:50'
        // ]);

        // //Send failed response if request is not valid
        // if ($validator->fails()) {
        //     return response()->json(['error' => $validator->messages()], 200);
        // }

        // //Request is validated
        // //Crean token
        // try {
        //     if (!$token = JWTAuth::attempt($credentials)) {
        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Login credentials are invalid.',
        //         ], 400);
        //     }
        // } catch (JWTException $e) {
        //     return $credentials;
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'Could not create token.',
        //     ], 500);
        // }

        // //Token created, return with success response and jwt token
        // return response()->json([
        //     'success' => true,
        //     'message' => 'employee succesfull login',
        //     'token' => $token,
        // ]);
    }

    public function logout(Request $request)
    {
        $validator = Validator::make($request->only('token'), [
            'token' => 'required'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is validated, do logout        
        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $Employee)
    {
        return "halo";
        // try {
        //     // mengvalidasi data nya agar ga ngasal
        //     $validatedData = $request->validate([
        //         'fullname' => 'required|max:255', //wajib diisi | maksimal 255
        //         'email' => 'required|email:dns|unique:users',
        //         'jenis_kelamin' => 'required',
        //         'tanggal_lahir' => 'required|date',
        //         'gaji' => 'required',
        //         'no_telepon' => 'required',
        //         'division_id' => 'required',
        //         'role_id' => 'required',
        //         // 'image' => 'required',
        //         // 'password' => 'required|min:5|max:255|confirmed',
        //         // 'password_confirmation' => 'required'

        //     ]);


        //     //$response['message]  cara akses
        //     // return response($response, 201);
        // } catch (\Throwable $th) {
        //     return response($th, 400);
        // }
    }
}
