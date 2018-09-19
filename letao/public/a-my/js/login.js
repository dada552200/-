$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    async: false,
    success: function(res){

        if(res.success){

            location.href = "user.html";
        }
    }
});

$(function(){
    $('#login-button').on('click',function(){

        var username = $.trim($("[name='username']").val());

        var password = $.trim($("[name='password']").val());

        if(!username){
            alert("请输入用户名");
            return;
        }

        if(!password){
            alert("请输入密码");
            return;
        }

        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            data:{
                username:username,
                password:password
            },
            success:function(res){

                if(res.success){

                    //登陆成功
                    location.href = "user.html";

                }else{
                    alert(res.message);
                }
            }
        })
    })
})