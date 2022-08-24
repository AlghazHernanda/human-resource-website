<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    // biar gapake fillable, ini artinya cuma id doang yg gaboleh di masukin mass assigment
    protected $guarded = ['id'];

    use HasFactory;

    public function roles()
    {
        //relasi one to many
        return $this->hasMany(Employee::class);
    }
    public function gaji()
    {
        //relasi one to many
        return $this->hasMany(Employee::class);
    }
}
