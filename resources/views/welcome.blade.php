<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset("app.css") }}">
</head>
<body>
@if(Auth::check())
    <div class="container my-5">
        Hoşgeldin <strong>{{ auth()->user()->firstname . " " . auth()->user()->lastname }}</strong>
        <button id="logout" class="btn btn-danger">Çıkış Yap</button>
    </div>
@else
    <section class="py-5">
        <div class="container text-center">
            <div class="row justify-content-between">
                <div class="col-md-5">
                    <form action="" id="login">
                        <h5 class="mb-4">Üye Girişi</h5>
                        <label class="sr-only" for="input1-signin-05">Kullanıcı Adınız</label>
                        <input class="form-control my-3 bg-light" id="input1-signin-05" type="text" name="username">

                        <label class="sr-only" for="input2-signin-05">Şifreniz</label>
                        <input class="form-control my-3 bg-light" id="input2-signin-05" type="password" name="password">
                        <button class="btn btn-primary btn-block py-2 my-3" type="button">Giriş Yap</button>
                    </form>
                </div>
                <div class="col-md-5 mt-5 mt-md-0">
                    <form action="" id="register">
                        <h5 class="mb-4">Üye Ol</h5>
                        <label class="sr-only" for="input4-signin-05">Kullanıcı Adınız</label>
                        <input class="form-control my-3 bg-light" id="input4-signin-05" type="text" name="username">

                        <label class="sr-only" for="input5-signin-05">Adınız</label>
                        <input class="form-control my-3 bg-light" id="input5-signin-05" type="text" name="firstname">

                        <label class="sr-only" for="input6-signin-05">Soyadınız</label>
                        <input class="form-control my-3 bg-light" id="input6-signin-05" type="text" name="lastname">

                        <label class="sr-only" for="input10-signin-05">Email Adresiniz</label>
                        <input class="form-control my-3 bg-light" id="input10-signin-05" type="email" name="email">

                        <label class="sr-only" for="input7-signin-05">Doğum Tarihiniz</label>
                        <input class="form-control my-3 bg-light" id="input7-signin-05" type="date" name="birthdate">

                        <label class="sr-only" for="input8-signin-05">Şifreniz</label>
                        <input class="form-control my-3 bg-light" id="input8-signin-05" type="password" name="password">

                        <label class="sr-only" for="input9-signin-05">Şifreniz (Tekrar)</label>
                        <input class="form-control my-3 bg-light" id="input9-signin-05" type="password" name="repass">


                        <button class="btn btn-primary btn-block py-2 my-3" type="button">Üye Ol</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endif


<script src="{{ asset("app.js") }}"></script>
</body>
</html>
