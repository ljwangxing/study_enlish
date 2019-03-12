$(document).ready(function(){
   $("#leftsider_nav").hide();
   $(".English").click(function(){
       $("#leftsider_nav").show();
   });
   $(".else_coursers").click(function(){
       $("#leftsider_nav").hide();
   });
   $("#test").click(function(){
       $(this).attr("disabled","disabled");
   });
});
function alertFun(){
    alert("你已经签到");
}

