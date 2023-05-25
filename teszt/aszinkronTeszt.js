import Aszinkron from "../js/asszinkron.js";

QUnit.test('adatBe metódus tesztje', (assert) => {

    const DONE = assert.async();

    const ASZINKRON = new Aszinkron();
    const VEGPONT = "../adatok.json";
    const CALLBACKFUGGVENYEM = function (data) {
        assert.deepEqual (data, {
            szemelyek: [
                {
                    nev: "Béla",
                    kor: 56,
                    nem: "ffi" 
                },
                {
                    nev: "Jenő",
                    kor: 16,
                    nem: "ffi"
                },
                {
                    nev: "Rózsa",
                    kor: 33,
                    nem: "nő"
                }
            ]
        });
        DONE();
    }

    ASZINKRON.adatBe(VEGPONT, CALLBACKFUGGVENYEM);
});