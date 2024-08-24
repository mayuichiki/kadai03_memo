// 今日の日付を自動表示
$(function(){
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let num = new Date().getDay();
    let weekday = ["日","月","火","水","木","金","土"];
    let week =weekday[num];
    $("#view-today").html(year + "年" + month + "月" + date + "日" +"(" + week + ")" );
});

// はじまりボタンクリックイベント
$(function(){
    $("#button-start").click(function() {
    $(this).toggleClass("click");
    });
});

// おわりボタンクリックイベント
$(function(){
    $("#button-end").click(function() {
    $(this).toggleClass("click");
    });
});

// きろくボタンクリックイベント
$("#button-save").on("click",function(){
    // localStorageからデータを保存
    const value = $("#text-memo").val();
    localStorage.setItem("memo",value);

    localStorage.setItem("start",$("#button-start").hasClass("click"));
    localStorage.setItem("end",$("#button-end").hasClass("click"));

    // アラートを表示
    alert("きろく");
});

// とりけすボタンクリックイベント
$("#button-clear").on("click", function() {
    // localStorageからデータを削除
    localStorage.removeItem("memo");
    localStorage.removeItem("start");
    localStorage.removeItem("end");

    // アラートを表示
    alert("とりけしました");

    // メモ入力欄をクリア
    $("#text-memo").val("");

    // ボタンの背景色を元に戻す
    $("#button-start").removeClass("click").css("background-color", "rgb(129, 196, 235)");
    $("#button-end").removeClass("click").css("background-color", "rgb(129, 196, 235)");
});

// ページ読み込み：保存データ取得表示
$(function(){
    if(localStorage.getItem("memo")){
        const value =localStorage.getItem("memo");
        $("#text-memo").val(value);
    }
    
    if(localStorage.getItem("start") === "true"){
        $("#button-start").addClass("click");
    }
    if(localStorage.getItem("end") === "true"){
        $("#button-end").addClass("click");
    }
});