<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

//use Illuminate\Database\Eloquent\Model;

class Employee extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];

    // biar gapake fillable, ini artinya cuma id doang yg gaboleh di masukin mass assigment
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'password_confirmation',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function division_employee()
    {
        //relasi one to one
        //namanya jadi division_employee, dan mengambil user id
        return $this->belongsTo(Division::class, 'division_id');
    }
    public function role_employee()
    {
        //relasi one to one
        //namanya jadi role_employee, dan mengambil user id
        return $this->belongsTo(Role::class, 'role_id');
    }
    public function role_gaji()
    {
        //relasi one to one
        //namanya jadi role_employee, dan mengambil user id
        return $this->belongsTo(Role::class, 'gaji');
    }

    public function employee_program_e()
    {
        //relasi one to many
        return $this->hasMany(Program::class);
    }
}
