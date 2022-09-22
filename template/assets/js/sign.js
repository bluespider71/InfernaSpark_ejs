$( document ).ready(function() {
    console.log('sign.document');
    
    if(localStorage.rememberme) {
        $('#inEmail').val(localStorage.email);
        $('#inPassword').val(localStorage.password);
        // $('#chkRemeber').click();
    }
    
    /* handle the logic when clicking the button 'signin' */
    $('#btnSignIn').click(function(e) {
        e.preventDefault();
        console.log('btnSignIn')

        // email validation //
        regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let email =  $('#inEmail').val();
        if(!regex.test(email)) {
            $.notify("Invalid email", "error", { position: "right" });
            $('#inEmail').focus();
            return;
        }
        password = $('#inPassword').val();
        _csrf = $('#_csrf').val();

        // post the request for signin //
        $.ajax({
            type: 'POST',
            url: '/signin',
            data: {email: email, password: password, _csrf: _csrf},
            success: function(response, textStatus, jqXHR) {
                // go to the dashboard if success //
                // show the notification //
                console.log('signin', response)
                if(response.result =='success') {                    
                    if( chkRemeber ) {
                        // if remember me is checked, then save the cookie //
                        localStorage.email = email;
                        localStorage.password = password;
                        localStorage.rememberme = true;
                    } else {
                        // else clear the cookie
                        localStorage.email = '';
                        localStorage.password = '';
                        localStorage.rememberme = false;
                    }
                    window.location.href = '/dashboard';                    
                }                    
                else {
                    
                    $.notify(response.data, "error", { position: "right" });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // show the notification //
                console.log('signin', errorThrown)
            }
        });

    })
    /* handle the logic when clicking the button 'signup' */
    $('#btnSignUp').click(function(e) {
        e.preventDefault();
        console.log('btnSignUp')

        // name validation //
        let regex = /^[a-zA-Z ]{2,30}$/;
        let username =  $('#upName').val();
        if(!regex.test(username)) {
            $.notify("Invalid user name", "error", { position: "right" });
            $('#upName').focus();
            return;
        }

        // email validation //
        regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let email =  $('#upEmail').val();
        if(!regex.test(email)) {
            $.notify("Invalid email", "error", { position: "right" });
            $('#upEmail').focus();
            return;
        }

        password = $('#upPassword').val();
        cnfmPassword = $('#upConfirmPassword').val();
        _csrf = $('#_csrf').val();

        // check the strength of password //
        regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/;
        if(!regex.test(password)) {
            $.notify("Password should contain minimum eight characters\n,at least one letter, one number and one special character", "error", { position: "right" });
            $('#upPassword').focus();
            return;
        }

        // compare the both password field // 
        if(password !== cnfmPassword) {
            $.notify("Password not matched", "error", { position: "right" });
            $('#upConfirmPassword').focus();
            return;
        }
        
        if(!chkTerm) {
            $.notify("Terms and Conditions not comfirmed", "error", { position: "right" });          
            return;
        }

        // // make sure if the "I accept ..." is checked //
        // let agreement = $('#chkAggreement').val();
        // console.log(agreement);

        // if(agreement) {
        //     $.notify("Please accept the Terms and Conditions", "error", { position: "right" });           
        //     return;
        // }

        // post the request for signup //
        $.ajax({
            type: 'POST',
            url: '/signup',
            data: {username: username, email: email, password: password, passwordConf: cnfmPassword, _csrf: _csrf},
            success: function(response, textStatus, jqXHR) {
                // go to the dashboard if success //
                // show the notification //
                console.log('signup', response);
                if(response.result =='success') {
                    $.notify('welcome to join in spark', "succss", { position: "right" });
                    $('#signIn').click();
                }                   
                else {
                    $.notify(response.data, "error", { position: "right" });
                }
                    
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // show the notification //
                console.log('signup', errorThrown)
            }
        });
    })
    /* handle the logic when clicking the button 'i accept terms and conditions' */
    let chkTerm = false;
    $('#chkAggreement').click(function(e) {
        chkTerm = !chkTerm;
    })
    let chkRemeber = false;
    /* handle the logic when clicking the button Remember me */
    $('#chkRemeber').click(function(e) {        
        chkRemeber = !chkRemeber;
    })
    /* handle the logic when clicking the link Forgot password */
    $('#linkForget').click(function(e) {
        e.preventDefault();
        console.log('linkForget');
        // post the request for signin //
        const email =  $('#inEmail').val();
        const _csrf = $('#_csrf').val();
        $.ajax({
            type: 'POST',
            url: '/forgot',
            data: {email: email, _csrf: _csrf},
            success: function(response, textStatus, jqXHR) {
                // go to the dashboard if success //
                // show the notification //
                console.log('forgot', response)
                if(response.result =='success') {                    
                    $.notify('Sent via email/nPlease check it.', "success", { position: "right" });                
                }
                else {                    
                    $.notify(response.data, "error", { position: "right" });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // show the notification //
                console.log('forgot', errorThrown)
            }
        });        
    })

});