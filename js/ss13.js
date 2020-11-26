function abc(){
    var x= "";
    for (var i = 0;i<6;i++){
        x+= "<div class=\"col-md-4\">\n" +
            "                <div class=\"item text-center\">\n" +
            "                    <h2 class=\"product-name\">Flying ninja</h2>\n" +
            "                    <img class=\"product-image\" src=\"https://vidatuixachlouiskimmi.com/wp-content/uploads/2020/01/%C3%A1o-thun-nam-n%E1%BB%AF-mickey-gucci-h%C3%A0ng-hi%E1%BB%87u.jpg\" height=\"700\" width=\"700\"/>\n" +
            "                    <p class=\"price\">$12</p>\n" +
            "                </div>\n" +
            "            </div>\n";
    }
    return x;
}
var a = document.getElementById("abbb");
a.innerHTML= abc();