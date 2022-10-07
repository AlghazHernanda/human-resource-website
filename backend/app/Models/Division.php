<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    // biar gapake fillable, ini artinya cuma id doang yg gaboleh di masukin mass assigment
    protected $guarded = ['id'];


    use HasFactory;

    public function divisions()
    {
        //relasi one to many
        return $this->hasMany(Employee::class);
    }

    public function divisions_program()
    {
        //relasi one to many
        return $this->hasMany(Program::class);
    }

    public function divisions_role()
    {
        //relasi one to many
        return $this->hasMany(Role::class);
    }
}
