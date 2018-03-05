//Business logic

var gamersArray = []
var rollHoldArray = []

function Gamer(gamerName, points) {
    this.gamerName = gamerName;
    this.points = points;
    GamerArray.push(this);
}

Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
        return a + b
    });
}

//UI logic
$(document).ready(function() {
    $("form#gamerform").submit(function(event) {
        event.preventDefault();
        var gamer1Name = $("#gamer1Name").val();
        var gamer1Name = $("#gamer2Name").val();
        var gamer1 = new Gamer(gamer1Name, 0);
        var gamer2 = new Gamer(gamer2Name, 0);
        $("#gamer1show").text(gamersArray[0].gamerName + "'s turn").show();
        showNamesAndScores();
        $("form").hide();
        $(".gamescore").show();
    });

    $("#rolldice").click(function(event) {
        event.preventDefault();
        $("#rollResult").show();
        $(".showTurnTotalPoints").show();
        var randomRoll = (1 + Math.floor(Math.random() * 6));
        $("#rollResult").text(randomRoll);
        if (randomRoll >= 2) {
            rollHoldArray.push(randomRoll);
            $("#turnTotalPoints").text(rollHoldArray.sum());

        } else {
            rollOneChangePlayers();

        }

    });

    $("#holddice").click(function(event) {
        changePlayers();
        if (gamersArray[0].score >= 100) {
            alert(gamersArray[0].gamerName + "wins !");
            document.location.reload(true);

        } else if (gamersArray[1].score >= 100) {
            alert(gamersArray[1].gamerName + "wins !");
            document.location.reload(true);
        }

    });

    function showNamesAndScores() {
        $("#gameronename").text(gamersArray[0].gamerName);
        $("#gamertwoname").text(gamersArray[1].gamerName);
        $("#gamer1points").text(gamersArray[0].score);
        $("gamer2gamer2points").text(gamersArray[1].score);
    }

    function rollOneChangePlayers() {
        if ($("#gamer1show").is(":visible")) {
            rollHoldArray = [0];
            $("#turnTotalPoints").text(rollHoldArray);
            setTimeout(function() {
                alert("OOps you rolles a 1 -no points!");
            }, 50);
            setTimeout(function() {
                $("#gamer2show").text(gamersArray[1].gamerName + " 's turn").show();
            }, 100);
            $("#gamer1show").hide();
            showNamesAndScores();
        } else if ($("#gamer1show").is(":visible")) {
            rollHoldArray = [0];
            $("#turnTotalPoints").text(rollHoldArray);
            setTimeout(function() {
                alert("You rolled a 1-no points!");
            }, 50);
            setTimeout(function() {
                $("#gamer1show").text(gamersArray[0].gamerName + " 's turn").show();
            }, 100);
            $("#gamer2show").hide();
            showNamesAndScores();

        }

    }

    function changePlayers() {
        if ($("#gamer1show").is(":visible")) {
            gamersArray[0].score = (gamersArray[0].score += rollHoldArray.sum());
            alert("Congrats," + gamersArray[0].gamerName + ",you got " + rollHoldArray.sum() + "points!");
            rollHoldArray = [0];
            $("#turnTotalPoints").text(rollHoldArray)
            $("#gamer1show").hide();
            $("#gamer2show").text(gamersArray[1].gamerName + "'s turn").show();
            console.log(gamersArray[0].score);
            showNamesAndScores();
        } else {
            alert("congrats," + gamersArray[1].gamerName + ",you got" + rollHoldArray.sum() + "points");
            gamersArray[1].score = (gamersArray[1].score += rollHoldArray.sum());
            $("#turnTotalPoints").text(rollHoldArray)
            $("gamer2show").hide();
            $("gamer2show").text(gamersArray[0].gamerName + " 's turn").show();
            showNamesAndScores();
            console.log(gamersArray[1].score);
        }

    }



});