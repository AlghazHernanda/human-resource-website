<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;

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


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $Employee)
    {
        //return "halo";
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'fullname' => 'required|max:255', //wajib diisi | maksimal 255
                'email' => 'required|email:dns|unique:users',
                'jenis_kelamin' => 'required',
                'tanggal_lahir' => 'required|date',
                'gaji' => 'required',
                'no_telepon' => 'required',
                'division_id' => 'required',
                'role_id' => 'required',
                // 'image' => 'required',
                // 'password' => 'required|min:5|max:255|confirmed',
                // 'password_confirmation' => 'required'

            ]);


            //$response['message]  cara akses
            // return response($response, 201);
        } catch (\Throwable $th) {
            return response($th, 400);
        }
    }
}
