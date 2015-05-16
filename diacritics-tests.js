/*
    Simple packages tests
 */
Tinytest.add('example', function (test) {

    test.equal(Diacritics.remove("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"),
        "Internationalizati0n");

    test.equal(Diacritics.remove("Båｃòл íｐѕùｍ ðｏɭ߀ｒ ѕïｔ ａϻèｔ âùþê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."),
        "BaCon ipѕum dhol0r ѕit aMet authe and0uille beef Culpa filet Mignon Cupidatat ut enim tonGue.");

    test.equal(Diacritics.remove("ᴎᴑᴅᴇȷʂ"), 
                "NoDEJs");

    test.equal(Diacritics.remove("hambúrguer"), 
                "hamburguer");

    test.equal(Diacritics.remove("hŒllœ"), 
                "hOElloe");

    test.equal(Diacritics.remove("Fußball"), 
                "Fussball");

    test.equal(Diacritics.remove("ABCDEFGHIJKLMNOPQRSTUVWXYZé"), 
                "ABCDEFGHIJKLMNOPQRSTUVWXYZe");
});
