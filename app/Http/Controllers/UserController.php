<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
//use Auth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    public function authenticate(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check email
        $user = User::where('email', $fields['email'])->first();

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // mengvalidasi data nya agar ga ngasal
        $validatedData = $request->validate([
            'name' => 'required|max:255', //wajib diisi | maksimal 255
            'email' => 'required|email:dns|unique:users',
            'password' => 'required|min:5|max:255|confirmed',
            'password_confirmation' => 'required'

        ]);

        // try {
        //     //code...
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }

        if ($validatedData['password'] == $validatedData['password_confirmation']) {
            //$validatedData['password'] = bcrypt($validatedData['password']); //di enkripsi dulu
            $validatedData['password'] = Hash::make($validatedData['password']); //bisa juga pake cara yang ini
            $validatedData['password_confirmation'] = $validatedData['password'];

            $user = User::create($validatedData); //masukin ke database

            $token = $user->createToken('myapptoken')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token,
                'message' => 'Registration successfull! please login',
            ];

            //$response['message]  cara akses
            return response($response, 201);
        } else {
            return back()->with('RegisterError', 'Register Failed');
        }

        // return "halo";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
