<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->id();
            $table->string('program_name');
            $table->string('subprogram_name');
            $table->foreignId('division_id');
            $table->foreignId('role_id');
            $table->foreignId('user_id'); //PIC
            $table->foreignId('employee_id');
            $table->string('status')->default("pending");
            $table->string('progress');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('desc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programs');
    }
}
