<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
//use Auth;
use Illuminate\Support\Facades\Auth;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //untuk nampilin program sesuai hr yang login
        //$hr_program = Program::where('user_id', 1)->get();
        $hr_program = Program::where('user_id', Auth::user()->id)->get();

        $id = auth('api')->user();

        $response = [
            'hr_program' => $hr_program,
            'id' => $id->id

        ];
        return response($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // mengvalidasi data nya agar ga ngasal
            $validatedData = $request->validate([
                'program_name' => 'required|max:255', //wajib diisi | maksimal 255
                'subprogram_name' => 'required|max:255',
                'division_id' => 'required',
                'role_id' => 'required',
                'user_id' => 'required',
                'employee_id' => 'required',
                'progress' => 'required|max:255',
                'start_date' => 'required|date',
                'end_date' => 'required|date',
                'desc' => 'required|max:255',

            ]);

            $program = Program::create($validatedData); //masukin ke database

            $response = [
                'program' => $program,
                'message' => 'Program succesfull create',
            ];
            //$response['message]  cara akses
            return response($response, 201);
        } catch (\Throwable $th) {
            return response($th, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function show(Program $program)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function edit(Program $program)
    {
        try {
            $response = [
                'employee' => $program,

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
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Program $program)
    {
        try {
            $rules = [
                'program_name' => 'required|max:255', //wajib diisi | maksimal 255
                'subprogram_name' => 'required|max:255',
                'division_id' => 'required',
                'role_id' => 'required',
                'user_id' => 'required',
                'employee_id' => 'required',
                'progress' => 'required|max:255',
                'start_date' => 'required|date',
                'end_date' => 'required|date',
                'desc' => 'required|max:255',
            ];

            $validatedData = $request->validate($rules);


            Program::where('id', $program->id)->update($validatedData);

            $response = [
                'program' => $program,
                'message' => 'Program succesfull update',
            ];
            //$response['message]  cara akses
            return response($response, 201);
        } catch (\Throwable $th) {
            return response($th, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function destroy(Program $program)
    {
        try {
            Program::destroy($program->id);

            $response = [
                'message' => 'Program succesfull delete',
            ];


            return response($response, 200);
        } catch (\Throwable $th) {
            return response($th, 404);
        }
    }
}
