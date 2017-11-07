var crystalNumbers = [2, 3, 7, 10];
var counter = 0;
var wins = 0;
var losses = 0;




$(document).ready(function() {
    var targetScore = Math.floor(Math.random() * 100) + 1;
    $("#targetscore").text(targetScore);

    for (var i = 0; i < crystalNumbers.length; i++) {

        var crystalRandomNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];

        var crystalImage = $("<img>");

        crystalImage.addClass("img-class");
        crystalImage.attr("src", "crystal.png");
        crystalImage.attr("crystal-data", crystalRandomNumber);

        $("#test").append(crystalImage);
    };



    $(".img-class").on("click", function() {
        var crystalValue = ($(this).attr("crystal-data"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#totalscore").text(counter);

        if (counter === targetScore) {
            wins++;
            $("#wins").text(wins);
            counter = 0;
            $("#totalscore").text(counter);
            targetScore = Math.floor(Math.random() * 100) + 1;
            $("#targetscore").text(targetScore)
            for (var j = 0; j < crystalNumbers.length; j++) {
                var crystalRandomNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
                $(".img-class").attr("crystal-data", crystalRandomNumber);
            }

        }

        else if (counter > targetScore) {
            losses++;
            $("#losses").text(losses);
            counter = 0;
            $("#totalscore").text(counter);
            targetScore = Math.floor(Math.random() * 100) + 1;
            $("#targetscore").text(targetScore)
            for (var j = 0; j < crystalNumbers.length; j++) {
                var crystalRandomNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
                $(".img-class").attr("crystal-data", crystalRandomNumber);
            }

        }
    });


});
