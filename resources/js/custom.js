var loginAjax = function (){
    var loginForm = $("#login");
    if (loginForm.length > 0){
        loginForm.find("button").on("click",function (){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: '/login',
                type: 'POST',
                data: loginForm.serialize(),
                success: function (data) {
                    switch (data) {
                        case "username_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bu kullanıcı adı kullanılmıyor.'
                            })
                            break;
                        case "password_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Şifre hatalı.'
                            })
                            break;
                        case "1":
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: 'Başarıyla giriş yaptınız, yönlendiriliyorsunuz.'
                            });

                            setTimeout(function (){
                                location.reload();
                            },1500);
                            break;
                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bilinmeyen bir hata oluştu, lütfen yöneticiler ile iletişime geçiniz.'
                            })
                            break;
                    }
                }
            });

        })
    }
}
var registerAjax = function (){
    var registerForm = $("#register");
    if (registerForm.length > 0){
        registerForm.find("button").on("click",function (){

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: '/register',
                type: 'POST',
                data: registerForm.serialize(),
                success: function (data) {
                    switch (data) {
                        case "username_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bu kullanıcı adı daha önceden alınmış.'
                            })
                            break;
                        case "email_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bu email adresi daha önceden alınmış.'
                            })
                            break;
                        case "pass_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Şifre ve şifre tekrar aynı olmalı.'
                            })
                            break;
                        case "age_error":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Sisteme 13 yaş altı kayıt olamamaktadır.'
                            })
                            break;
                        case "0":
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bilinmeyen bir hata oluştu, lütfen yöneticiler ile iletişime geçiniz.'
                            })
                            break;
                        case "1":
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: 'Sisteme başarılı bir şekilde kayıt oldunuz, giriş yapabilirsiniz.'
                            })
                            break;
                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bilinmeyen bir hata oluştu, lütfen yöneticiler ile iletişime geçiniz.'
                            })
                            break;
                    }
                }
            });

        })
    }
}
var logoutAjax = function (){
    var logoutBtn = $("#logout");
    if (logoutBtn.length > 0){
        logoutBtn.on("click",function (){

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: '/logout',
                type: 'POST',
                data: {logout:1},
                success: function (data) {
                    switch (data) {
                        case "1":
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: 'Başarıyla çıkış yaptınız, yönlendiriliyorsunuz.'
                            });
                            setTimeout(function (){
                                location.reload();
                            },1500);
                            break;
                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata...',
                                text: 'Bilinmeyen bir hata oluştu, lütfen yöneticiler ile iletişime geçiniz.'
                            })
                            break;
                    }
                }
            });

        })
    }
}

$(document).ready(function (){
    loginAjax();
    registerAjax();
    logoutAjax();
})
