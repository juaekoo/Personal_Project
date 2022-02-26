$(document).ready(function(){


    // 전체약관에 체크하면 하단전체 체크, 전체약관 체크해제하면 하단전체 체크해제
    $('input:checkbox[name="termsAll"]').click(function(){
        $('input:checkbox[name="terms14"]')
            .prop('checked', !($('input:checkbox[name="terms14"]').is(':checked')));
        $('input:checkbox[name="termsService"]')
            .prop('checked', !($('input:checkbox[name="termsService"]').is(':checked')));
        $('input:checkbox[name="termsEvent"]')
            .prop('checked', !($('input:checkbox[name="termsEvent"]').is(':checked')));
    })


    $('#signupBtn').click(function(){

        // 유효성 체크에 적용되는 CSS형식 초기화
        $('#alarm').css('visibility', 'hidden');
        $('#email-id').removeClass('redbox');
        $('#email-option').removeClass('redbox');
        $('#password').removeClass('redbox');
        $('#passwordCheck').removeClass('redbox');
        $('#nickname').removeClass('redbox');
        $('#signupBtn').removeClass('redbox');
        
        var emailFormat = RegExp(/^[A-Za-z0-9_\-\'\.]+.@[A-Za-z0-9]+\.[A-Za-z0-9]+$/);
        var passwordFormat = RegExp(/^[A-Za-z0-9]{8,}$/);

        var emailID = $('#email-id').val();
        var emailOption = $('#email-option').val();
        var password = $('#password').val();     
        var passwordCheck = $('#passwordCheck').val();   
        var nickname = $('#nickname').val();  
        var termsAll = $('input:checkbox[name="termsAll"]').is(':checked');

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
        $('input[name="termsAll"]').addClass('redbox');


        // 형식 확인
        
    })
});