<?php

namespace App\Http\Controllers;


use App\Models\Role;
use App\Models\User;
use App\Models\Division;
use App\Models\Employee;
use Illuminate\Http\Request;
//use Auth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Illuminate\Support\Facades\Validator;
use Exception;


class HRController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //test join table antara employee dan divisi
        $employees = Employee::all();
        foreach ($employees as $employee) {
            $employee_division = $employee->division_employee->division_name;
            $employee_role = $employee->role_employee->role_name;
            $employee_gaji = $employee->role_gaji->salary;
        }
        $response = [
            'employee_division' => $employee_division,
            'employee_role' =>  $employee_role,
            'employee_gaji' =>  $employee_gaji
        ];
        return response($response, 200);
        //return response($response, 200)->json(['valid' => auth()->check()]);
    }

    //login
    public function authenticate(Request $request)
    {
        // $fields = $request->validate([
        //     'email' => 'required|string',
        //     'password' => 'required|string'
        // ]);

        // // verifikasi email
        // $user = User::where('email', $fields['email'])->first();

        // // verifikasi password
        // if (!$user || !Hash::check($fields['password'], $user->password)) {
        //     return response([
        //         'message' => 'Bad creds'
        //     ], 401);
        // }

        // $token = $user->createToken('myapptoken')->plainTextToken;


        // $response = [
        //     'user' => $user,
        //     'token' => $token
        // ];

        // return response($response, 201);

        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is validated
        //Crean token
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Login credentials are invalid.',
                ], 400);
            }
        } catch (JWTException $e) {
            return $credentials;
            return response()->json([
                'success' => false,
                'message' => 'Could not create token.',
            ], 500);
        }

        //Token created, return with success response and jwt token
        return response()->json([
            'success' => true,
            'token' => $token,
        ]);
    }

    //logout
    public function logout(Request $request)
    {
        //valid credential
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //Create HR and store
    public function store(Request $request)
    {
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'name' => 'required|max:255', //wajib diisi | maksimal 255
                'email' => 'required|email:dns|unique:users',
                'password' => 'required|min:5|max:255|confirmed',
                'password_confirmation' => 'required'

            ]);

            if ($validatedData['password'] == $validatedData['password_confirmation']) {
                //$validatedData['password'] = bcrypt($validatedData['password']); //di enkripsi dulu
                $validatedData['password'] = Hash::make($validatedData['password']); //bisa juga pake cara yang ini
                $validatedData['password_confirmation'] = $validatedData['password'];

                $user = User::create($validatedData); //masukin ke database

                $response = [
                    'user' => $user,
                    'message' => 'Registration successfull! please login',
                ];
                //$response['message]  cara akses
                return response($response, 201);
            }
        } catch (Exception $e) {
            $response = [
                'message' => $e->getMessage()
            ];
            return response($response, 400);
        }

        // return "halo";
    }

    public function storeRole(Request $request)
    {
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'role_name' => 'required|unique:roles', //wajib diisi | maksimal 255
                'division' => 'required',
                'salary' => 'required',

            ]);

            $role = Role::create($validatedData);

            $response = [
                'role' => $role,
                'message' => 'Role successfull created',
            ];

            //dd($response);

            //$response['message]  cara akses
            return response($response, 201);
        } catch (Exception $e) {
            $response = [
                'message' => $e->getMessage()
            ];
            return response($response, 400);
        }
    }

    public function storeDivision(Request $request)
    {
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'division_name' => 'required', //wajib diisi | maksimal 255
            ]);

            $division = Division::create($validatedData);

            $response = [
                'division' => $division,
                'message' => 'division successfull created',
            ];

            //dd($response);

            //$response['message]  cara akses
            return response($response, 201);
        } catch (Exception $e) {
            $response = [
                'message' => $e->getMessage()
            ];
            return response($response, 400);
        }
    }

    public function storeEmployee(Request $request)
    {
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'fullname' => 'required|max:255', //wajib diisi | maksimal 255
                'email' => 'required|email:dns|unique:users',
                'jenis_kelamin' => 'required',
                // 'tanggal_lahir' => 'required|date',
                'gaji' => 'required',
                // 'no_telepon' => 'required',
                'division_id' => 'required',
                'role_id' => 'required',
                // 'image' => 'required',
                'password' => 'required|min:5|max:255|confirmed',
                'password_confirmation' => 'required'

            ]);

            if ($validatedData['password'] == $validatedData['password_confirmation']) {
                //$validatedData['password'] = bcrypt($validatedData['password']); //di enkripsi dulu
                $validatedData['password'] = Hash::make($validatedData['password']); //bisa juga pake cara yang ini
                $validatedData['password_confirmation'] = $validatedData['password'];

                $employee = Employee::create($validatedData); //masukin ke database

                // $token = $employee->createToken('myapptoken')->plainTextToken;

                $response = [
                    'employee' => $employee,
                    //'token' => $token,
                    'message' => 'Registration successfull! please login',
                ];
                //$response['message]  cara akses
                return response($response, 201);
            }
        } catch (\Throwable $th) {
            return response($th, 400);
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
    }
}
