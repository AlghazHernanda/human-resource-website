<?php

namespace Database\Seeders;

use App\Models\Division;
use App\Models\Employee;
use App\Models\Program;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Mohamad Alghaz Hernanda',
            'email' => 'alghaz@gmail.com',
            'password' => bcrypt('alghaz'),
            'password_confirmation' => bcrypt('alghaz'),

        ]);

        User::create([
            'name' => 'hernanda',
            'email' => 'hernanda@gmail.com',
            'password' => bcrypt('hernanda'),
            'password_confirmation' => bcrypt('hernanda'),

        ]);

        User::create([
            'name' => 'bryan',
            'email' => 'bryan@gmail.com',
            'password' => bcrypt('bryan'),
            'password_confirmation' => bcrypt('bryan'),

        ]);

        Employee::create([
            'fullname' => 'azam',
            'email' => 'azam@gmail.com',
            'jenis_kelamin' => 'pria',
            'division_id' => '1',
            'role_id' => '1',
            'gaji' => '1',
            'password' => bcrypt('azam'),
            'password_confirmation' => bcrypt('azam'),

        ]);

        Employee::create([
            'fullname' => 'qonita',
            'email' => 'qonita@gmail.com',
            'jenis_kelamin' => 'pria',
            'division_id' => '2',
            'role_id' => '2',
            'gaji' => '2',
            'password' => bcrypt('qonita'),
            'password_confirmation' => bcrypt('qonita'),

        ]);

        Employee::create([
            'fullname' => 'riyadh',
            'email' => 'riyadh@gmail.com',
            'jenis_kelamin' => 'pria',
            'division_id' => '3',
            'role_id' => '3',
            'gaji' => '3',
            'password' => bcrypt('riyadh'),
            'password_confirmation' => bcrypt('riyadh'),

        ]);





        Role::create([
            'role_name' => 'software engineer',
            'division' => '1',
            'salary' => '5000000'
        ]);

        Role::create([
            'role_name' => 'social media marketing',
            'division' => '2',
            'salary' => '4000000'
        ]);

        Role::create([
            'role_name' => 'payment',
            'division' => '3',
            'salary' => '3000000'
        ]);



        Division::create([
            'division_name' => 'technology',

        ]);

        Division::create([
            'division_name' => 'marketing',

        ]);

        Division::create([
            'division_name' => 'finance',

        ]);

        Program::factory(10)->create();
    }
}
