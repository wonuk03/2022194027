
$(function(){
    $("nav > ul > li").hover(
        function(){
            $(this).find(".sub").stop().slideDown(300);
            $(this).children("a").addClass("over");
        },
        function(){
            $(this).find(".sub").stop().slideUp(300);
            $(this).children("a").removeClass("over");
        }
    );
    $("nav > ul > li > a").focusin(function(){
        // console.log("focusin event");
        $(this).next(".sub").stop().slideDown(300);
        $(this).addClass("over");
    });
    $("nav li li:last-child a").focusout(function(){
        // console.log("focusout event");
        $(this).parent().parent().stop().slideUp(300);
        $(this).parent().parent().prev().removeClass("over");
    });
});


$(document).ready(function(){
  let coun = 0;

  const totalWithClone = $(".tra li").length;  
  const realTotal = totalWithClone - 1;         

  for(let i=0; i<realTotal; i++){
    $(".dots").append("<span></span>");
  }
  $(".dots span").eq(0).addClass("on");

  function setDot(idx){
    $(".dots span").removeClass("on");
    $(".dots span").eq(idx).addClass("on");
  }

  setInterval(function(){
    coun++;

    $(".tra").css("transition","all 1s ease 0s");
    $(".tra").css("transform","translateX(" + (-1200 * coun) + "px)");


    setDot(coun % realTotal);

  
    if(coun === totalWithClone - 1){ 
      setTimeout(function(){
        $(".tra").css("transition","none");
        $(".tra").css("transform","translateX(0px)");
        coun = 0;
        setDot(0);
      }, 800);
    }
  }, 2000);
});








$(function () {

  $(window).on("pageshow", function () {
    $(".faqitem").removeClass("on");
    $(".faqicon").text("+");
    $(".faqbody").stop(true, true).hide().css({ height: "", overflow: "" });
  });

  $(".faqitem").on("click", function () {
    var $this = $(this);


    $(".faqbody").stop(true, true);


    $(".faqitem").not($this).removeClass("on");
    $(".faqitem").not($this).find(".faqicon").text("+");
    $(".faqitem").not($this).find(".faqbody").slideUp(200, function () {
      $(this).css({ height: "", overflow: "" });
    });


    $this.toggleClass("on");
    $this.find(".faqbody").slideToggle(200, function () {
      $(this).css({ height: "", overflow: "" });
    });

    $this.find(".faqicon").text($this.hasClass("on") ? "-" : "+");
  });

});


$(function(){

  $(".submitbtn").on("click", function(){

    
    var name = $(".applyform input[type='text']").eq(0).val().trim();
    var phone = $(".applyform input[type='text']").eq(1).val().trim();
    var email = $(".applyform input[type='email']").val().trim();
    var birth = $(".applyform input[type='text']").eq(2).val().trim();

  
    var agree = $("#agree").is(":checked");

   
    if(name === ""){
      alert("이름을 입력해 주세요.");
      return;
    }
    if(phone === ""){
      alert("연락처를 입력해 주세요.");
      return;
    }
    if(email === ""){
      alert("이메일을 입력해 주세요.");
      return;
    }
    if(birth === ""){
      alert("생년월일을 입력해 주세요.");
      return;
    }
    if(!agree){
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

  
    alert("제출 완료되었습니다! 확인 후 합격자에게만 개별 연락드립니다.");


    $(".applyform")[0].reset();

  });

});

