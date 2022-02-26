$(document).ready(function(){

    $('#termsAll').click(function(){
        if ( $('#termsAll').is(':checked')) {
            $('.terms').prop('checked', true);
        } else {
            $('.terms').prop('checked', false);
        }
    })

    $('.terms').click(function(){
        if ( $('.terms:checked').length == 3 ) {
            $('#termsAll').prop('checked', true);
        } else {
            $('#termsAll').prop('checked', false);
        }
    })

    $('#signupBtn').click(function(){

        // 유효성 체크에 적용되는 CSS형식 초기화
        $('#alarm').css('visibility', 'hidden');
        $('#email-id').removeClass('redbox');
        $('#email-option').removeClass('redbox');
        $('#password').removeClass('redbox');
        $('#passwordCheck').removeClass('redbox');
        $('#nickname').removeClass('redbox');
        $('#termsAll').removeClass('redbox');
        $('#signupBtn').removeClass('redbox');
        
        var emailFormat = RegExp(/^[A-Za-z0-9_\-\'\.]+.@[A-Za-z0-9]+\.[A-Za-z0-9]+$/);
        var passwordFormat = RegExp(/^[A-Za-z0-9]{8,}$/);
        var nicknameFormat = RegExp(/^[가-힣A-Za-z0-9]]{2,10}/);

        var emailID = $('#email-id').val();
        var emailOption = $('#email-option').val();
        var password = $('#password').val();     
        var passwordCheck = $('#passwordCheck').val();   
        var nickname = $('#nickname').val();  
        var termsAll = $('#termsAll').is(':checked');
        var t1 = $('input[name="t1"]').is(':checked');
        var t2 = $('input[name="t2"]').is(':checked');

        // 빈칸 확인
        if(!emailID || emailOption == null) {
            $('#email-id').addClass('redbox');
            $('#email-option').addClass('redbox');
            $('#signupBtn').addClass('redbox');
        }
        if(!password) {
            $('#password').addClass('redbox');
            $('#signupBtn').addClass('redbox');
        }
        if(!passwordCheck) {
            $('#passwordCheck').addClass('redbox');
            $('#signupBtn').addClass('redbox');
        }
        if(!nickname) {
            $('#nickname').addClass('redbox');
            $('#signupBtn').addClass('redbox');
        }
        if ( !(termsAll || (t1&&t2)) ) {
            $('#termsAll').addClass('redbox');
            $('#signupBtn').addClass('redbox');
        }

        // 형식 확인
        if(!emailFormat.test(emailID)){
            $('#email-id').addClass('redbox');
            $('#alarmEmail').html('이메일ID 형식이 올바르지 않습니다.')
                .css('visibility', 'visible');
        } 
        if(!passwordFormat.test(password)){
            $('#password').addClass('redbox');
            $('.description').css('color', 'firebrick')
        }
        if(password != passwordCheck) {
            $('#password').addClass('redbox');
            $('#passwordCheck').addClass('redbox');
            $('#alarmPassword').html('비밀번호가 일치하지 않습니다.')
                .css('visibility', 'visible');
        }
        if(!nicknameFormat.test(nickname)){
            $('#password').addClass('redbox');
            $('.description').css('color', 'firebrick')
        }

        if(emailFormat.test(emailID) && passwordFormat.test(password) && password == passwordCheck && nicknameFormat.test(nickname)) {
            location.assign('home.html');
        }
    })
});