$(function(){
    let cats = $(".cat");
    let buttons = $("button");

    // let viewList = {
    //
    // };

    let viewCat = {
        hideAllCats: function ()
        {
            for (let i = 0; i < cats.length; i++) {
                $(cats[i]).hide();
            }
        }
    };

    // let model = {
    //
    // };

    let octopus = {
         bindButtonToCat: function(idNumber) {
            $("#button" + idNumber).click(function () {
                viewCat.hideAllCats();
                $("#cat" + idNumber).show();
            });
        },

         bindCounterToCat: function(idNumber) {
            let cat = "#cat" + idNumber;
            $(cat).click(function () {
                let count = $(cat + " > .counter").text();
                count = parseInt(count) + 1;
                $(cat + " > .counter").text(count);
            });
        }
    };

    for (let i = 1; i <= buttons.length; i++) {
        octopus.bindButtonToCat(i);
    }

    for (let i = 1; i <= cats.length; i++) {
        octopus.bindCounterToCat(i);
    }

    viewCat.hideAllCats();
    $("#cat1").show();
});