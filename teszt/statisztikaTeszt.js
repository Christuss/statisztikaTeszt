import Statisztika from "../js/Statisztika.js";

QUnit.module('Statisztika osztály tesztje', () => {
    
    const STAT = new Statisztika();

    QUnit.test("Statisztika létezik", (assert) => {
        assert.ok(STAT);
    });


    QUnit.test("nemszerintSzama(nem) létezik", (assert) => {
        assert.ok(STAT.nemszerintSzama);
    });


    QUnit.test("atlagEletkor() létezik", (assert) => {
        assert.ok(STAT.atlagEletkor);
    });

    QUnit.test("nemszerintAtlagEletkora(nem) létezik", (assert) => {
        assert.ok(STAT.nemszerintAtlagEletkora);
    });

    QUnit.test("nemszerintSzama(nem) metódus", (assert) => {
        assert.ok(typeof STAT.nemszerintAtlagEletkora === "function");
    });

    QUnit.test("atlagEletkor() metódus", (assert) => {
        assert.ok(typeof STAT.atlagEletkor === "function");
    });

    QUnit.test("nemszerintAtlagEletkora(nem) metódus", (assert) => {
        assert.ok(typeof STAT.nemszerintAtlagEletkora === "function");
    });

    
});

QUnit.module("nemszerintSzama(nem) metódus tesztje", () => {


    QUnit.test("nemszerintSzama('nő') üres lista", (assert) => {
        let szemelyek = []
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama('nő') egy nő", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: "ffi"
            },
            {
                nem: "nő"
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 1);
    });

    QUnit.test("nemszerintSzama('nő') mind nő", (assert) => {
        let szemelyek = [
            {
                nem: "nő" 
            },
            {
                nem: "nő"
            },
            {
                nem: "nő"
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 3);
    });

    QUnit.test("nemszerintSzama('nő') mind férfi", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: "ffi"
            },
            {
                nem: "ffi"
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama('nő') van üres", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: ""
            },
            {
                nem: "ffi"
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama('nő') van szám", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: 12
            },
            {
                nem: 13
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama('nő') van NaN", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: NaN
            },
            {
                nem: 13
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test("nemszerintSzama(null) van null", (assert) => {
        let szemelyek = [
            {
                nem: "ffi" 
            },
            {
                nem: null
            },
            {
                nem: 13
            }
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama(null), 1);
    });
})

QUnit.module("atlagEletkor() metódus tesztje", () => {
    QUnit.test("atlagEletkor() üres lista", (assert) => {
        let szemelyek = []
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.atlagEletkor(), 0);
    });

    QUnit.test("atlagEletkor() üres lista", (assert) => {
        let szemelyek = [
            {kor:23},
            {kor:43},
            {kor:64}
        ]
        const STAT = new Statisztika(szemelyek);
        assert.equal(STAT.atlagEletkor(), 43.333333333333336);
    });
})