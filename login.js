$(document).ready(function(){
    $('#loginBtn').click(function(){

        // 유효성 체크에 적용되는 CSS형식 초기화
        $('#alarm').css('visibility', 'hidden');
        $('input[name="email"]').removeClass('redbox');
        $('input[name="password"]').removeClass('redbox');
        
        // 네이버: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능 (반드시 첫문자는 영/숫자만 가능.)
        // 다음 : 4~20자의 영문 대소문자, 숫자와 특수기호(_),(-)만 사용 가능
        // 구글 : 문자(a-z), 숫자(0-9), 대시(-), 밑줄(_), 아포스트로피('), 마침표(.)를 포함할 수 있습니다. 
        //        사용자 이름의 처음과 끝에 마침표(.)를 제외한 영숫자가 아닌 문자를 사용할 수 있으며 최대 64자(영문)까지 입력가능
        
        // 위를 참고로 아이디란에 영문대소문자, 숫자, 특수기호(_-.') 모두 입력은 가능하게 함 
        // 자세한 아이디규칙은 여기 로그인단계에서는 적용X. DB에 맡김
        var emailFormat = RegExp(/^[A-Za-z0-9_\-\'\.]+.@[A-Za-z0-9]+\.[A-Za-z0-9]+$/);
        var passwordFormat = RegExp(/^[A-Za-z0-9]{8,}$/);

        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();

        // 빈칸 확인
        if(!email) {
            $('input[name="email"]').addClass('redbox');
        } 
        if(!password) {
            $('input[name="password"]').addClass('redbox');
        } 

        // 형식 확인
        if (!emailFormat.test(email) && !passwordFormat.test(password)){
            $('input[name="email"]').addClass('redbox');
            $('input[name="password"]').addClass('redbox');
            $('#alarm').html('이메일과 비밀번호 형식이 올바르지 않습니다.')
                .css('visibility', 'visible');
            
        } else if(!emailFormat.test(email)){
            $('input[name="email"]').addClass('redbox');
            $('#alarm').html('이메일 형식이 올바르지 않습니다.')
                .css('visibility', 'visible');
        } else if(!passwordFormat.test(password)){
            $('input[name="password"]').addClass('redbox');
            $('#alarm').html('비밀번호 형식이 올바르지 않습니다.')
                .css('visibility', 'visible');
        } else {
            location.assign('home.html');
        }

    })
});