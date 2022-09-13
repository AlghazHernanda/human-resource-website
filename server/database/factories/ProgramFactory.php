<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $status = "pending";
        $progress = "50%";
        return [
            'program_name' => $this->faker->sentence(mt_rand(2, 3)), //mt_rand = masukin panjang sentece random, jadi minimal 2 kata maksimal 8 kata
            'subprogram_name' => $this->faker->sentence(mt_rand(2, 3)), //mt_rand = masukin panjang sentece random, jadi minimal 2 kata maksimal 8 kata
            'division_id' => mt_rand(1, 3),
            'role_id' => mt_rand(1, 3),
            'user_id' => mt_rand(1, 3),
            'employee_id' => mt_rand(1, 3),
            'status' => $status,
            'progress' => $progress,
            'start_date' => $this->faker->dateTime(),
            'end_date' => $this->faker->dateTime(),
            'desc' => $this->faker->sentence(mt_rand(2, 3)),
            // 'desc' => collect($this->faker->paragraphs(mt_rand(5, 6)))
            //     ->map(fn ($p) => "<p>$p</p>")
            //     ->implode(''),
        ];
    }
}
