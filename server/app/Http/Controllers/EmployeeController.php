<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class EmployeeController extends Controller
{

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
        $employee = Employee::where('email', $fields['email'])->first();

        // verifikasi password
        if (!$employee || !Hash::check($fields['password'], $employee->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $employee->createToken($request['email'], ['employee'])->plainTextToken;

        $response = [
            'employee' => $employee,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
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
