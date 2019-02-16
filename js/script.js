$("document").ready(function () {
    var id = 10;
    var message = "";
    $("#mybtn").click(function () {
        var product = $("#product").val();
        var quantity = Number.parseFloat($("#quantity").val());
        if (quantity && (quantity > 0 && quantity <= 200)) {
            $(".val-error").text("");
            var entry = $("<tr><td>" + product + "</td ><td>" + quantity.toFixed(2) + " lb</td> <td class='remove-item'><button type='button' id='item" + ++id + "'>Remove</button></td></tr > ");
            $("#myTable").append(entry);
            $("#quantity").val("");
            return;
        }
        else {
            message = "Please Enter a number between 0 and 200";
            $("#quantity").addClass("error-border");
            $(".val-error").text(message);
            return;
        }
    });//

    $("#myTable").on("click", "td>button", function (e) {
        var item, toRemove;
        item = $(e.target).parents("tr");
        var h = (e.pageY / 2) -10;
        var w = (e.pageX / 2) - 80;
        toRemove = item;
        toRemove.addClass("toDelete");
        $("#mydialog").css({ "top": h + "px", "left": w + "px" }).fadeIn("fast");
        $("input,select,button").not("#mydialog>button").attr("disabled", "disabled").css("cursor", "not-allowed");
        $("body").addClass("opacity");
        e.stopPropagation();
        $("#itembox #mydialog").on("click", "#no", function (e) {
            toRemove.removeClass("toDelete");
            $("input,select,button").attr("disabled", false).css("cursor", "auto");
            $("body").removeClass("opacity");
            $("#mydialog").fadeOut("slow");
            e.stopPropagation();
            item = null;
        });//

        $("#itembox #mydialog").on("click", "#yes", function (e) {
            $("input,select,button").attr("disabled", false).css("cursor", "auto");
            $("body").removeClass("opacity");
            $("#mydialog").fadeOut("slow");
            $(item).fadeOut(1000);
            e.stopPropagation();
        });//

    });//

    $("#quantity").on("mouseenter", function () {
        $(this).removeClass("error-border");
    });

});//
