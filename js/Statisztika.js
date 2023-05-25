class Statisztika {
    #lista;
    constructor(lista) {
        this.#lista = lista;
    }
    nemszerintSzama(nem) {
        let db = 0;
        this.#lista.forEach((element) => {
            if (element.nem === nem) {
                db++;
            }
        });
        return db;
    }
    atlagEletkor() {
        let atlag = 0;
        this.#lista.forEach((element) => {
            atlag += element.kor;
        });
        if (this.#lista.length == 0) {
            return 0;
        }
        return atlag / this.#lista.length;
    }
    nemszerintAtlagEletkora(nem) {
        let atlag = 0;
        let db = 0;
        this.#lista.forEach((element) => {
            if (element.nem === nem) {
                atlag += element.kor;
                db++;
            }
        });
        return atlag / db;
    }
}

export default Statisztika;