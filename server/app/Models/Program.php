<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    // biar gapake fillable, ini artinya cuma id doang yg gaboleh di masukin mass assigment
    protected $guarded = ['id'];

    public function division_employee_program()
    {
        //relasi one to one
        //namanya jadi division_employee, dan mengambil user id
        return $this->belongsTo(Division::class, 'division_id');
    }
    public function employee_program()
    {
        //relasi one to one
        //namanya jadi role_employee, dan mengambil user id
        return $this->belongsTo(Employee::class, 'employee_id');
    }
    public function role_employee_program()
    {
        //relasi one to one
        //namanya jadi role_employee, dan mengambil user id
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function hr_picprogram()
    {
        //relasi one to one
        //namanya jadi role_employee, dan mengambil user id
        return $this->belongsTo(User::class, 'user_id');
    }
}
