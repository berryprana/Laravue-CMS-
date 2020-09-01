<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'Berry Prana';
        $user->email = 'berryprana@gmail.com';
        $user->password = bcrypt('sopayamenak');
        $user->save();
        $user->roles()->attach(Role::where('name', 'user')->first());

        $admin = new User;
        $admin->name = 'Wulan Maudi';
        $admin->email = 'maudy.wulan4@gmail.com';
        $admin->password = bcrypt('lukisandinding26');
        $admin->save();
        $admin->roles()->attach(Role::where('name', 'admin')->first());
    }
}
