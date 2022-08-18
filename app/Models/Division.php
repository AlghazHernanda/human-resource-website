<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    // biar gapake fillable, ini artinya cuma id doang yg gaboleh di masukin mass assigment
    protected $guarded = ['id'];


    use HasFactory;
}
