<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request){
        $findUser = User::where("username",$request->get("username"))->first();

        if (!$findUser){
            return "username_error";
            exit();
        }

        if (!Hash::check($request->get("password"),$findUser->password)){
            return "password_error";
            exit();
        }

        $credentials = $request->only('username', 'password');
        Auth::attempt($credentials);
        return true;

    }

    public function register(Request $request){
        $checkUserName = User::where("username",$request->get("username"))->first();
        if ($checkUserName){
            return "username_error";
            exit();
        }

        $checkEmail = User::where("email",$request->get("email"))->first();
        if ($checkEmail){
            return "email_error";
            exit();
        }

        if ($request->get("password") != $request->get("repass")){
            return "pass_error";
            exit();
        }


        $bd = explode("-",$request->get("birthdate"));
        $bd = \Carbon\Carbon::createFromDate($bd[0],$bd[1],$bd[2])->diffInYears(\Carbon\Carbon::now());

        if ($bd < 13){
            return "age_error";
            exit();
        }


        $user = new User();
        $user->username = $request->get("username");
        $user->firstname = $request->get("firstname");
        $user->lastname = $request->get("lastname");
        $user->email = $request->get("email");
        $user->birth_date = $request->get("birthdate");
        $user->password = Hash::make($request->get("password"));
        $save = $user->save();
        if ($save){
            return true;
        }else{
            return false;
        }
    }

    public function logout(){
        auth()->logout();
        return true;
    }
}
