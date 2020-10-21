$(document).keypress(function(e) {
    var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (eCode == 13) {
        window.location.href = "https://www.baidu.com/s?wd=" + $("#SearchKey").val();
    }
});

$(document).ready(function() {
    $("#Baidu").click(
        function() {
            window.location.href = "https://www.baidu.com/s?wd=" + $("#SearchKey").val();
        }
    )

    $("#Google").click(
        function() {
            window.location.href = "https://www.google.com/search?wd=" + $("#SearchKey").val();
        }
    )
})