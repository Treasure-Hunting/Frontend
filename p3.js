    var hi1 = "a";
    var hi2 = "b";
    var hi3 = "c";
    var hi4 = "d";
    var key1 = 0;
    var key2 = 1;
    var key3 = 2;
    var key4 = 3;
    var count = 0;
    var hints = [hi1, hi2, hi3, hi4];
    var keyward = [key1, key2, key3, key4];
    var random1 = Math.floor(Math.random() * hints.length);
    var random2 = Math.floor(Math.random() * hints.length);
    var random3 = Math.floor(Math.random() * hints.length);
    var random4 = Math.floor(Math.random() * hints.length);
    while (random2 == random1) {
        random2 = Math.floor(Math.random() * hints.length);
    }
    while (random3 == random2 || random3 == random1) {
        random3 = Math.floor(Math.random() * hints.length);
    }
    while (random4 == random2 || random4 == random1 || random4 == random3) {
        random4 = Math.floor(Math.random() * hints.length);
    }
    window.onload = function onload() {
        document.getElementById("hint").innerHTML = hints[random1];

        document.getElementById("confirm").onclick = function() {
            var key = document.getElementById("number").value;
            if (key == keyward[random1]) {
                document.getElementById("hint").innerHTML = hints[random2];
                document.getElementById("number").value = "";
                count++;
            }
            if (key == keyward[random2] && count == 1) {
                document.getElementById("hint").innerHTML = hints[random3];
                document.getElementById("number").value = "";
                count++;
            }
            if (key == keyward[random3 && count == 2]) {
                document.getElementById("hint").innerHTML = hints[random4];
                document.getElementById("number").value = "";
                count++;
            }
            if (key == keyward[random4] && count == 3) {
                location.href = "../p4-e/p4-e.html";
            }
        }

    }