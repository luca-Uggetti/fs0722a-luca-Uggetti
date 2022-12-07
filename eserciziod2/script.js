class Pagination {
    constructor (items = [], pageSize = 10) {
        this.items = items
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1
    }

    paginaPrecedente () {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        return this
    }

    paginaSuccessiva () {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        return this
    }

    primaPagina () {
        this.currentPage = 1
        return this
    }

    ultimaPagina () {
        this.currentPage = this.totalPages
        return this
    }

    goToPage (page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            return this
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            return this
        }
    }

    getItemsShow () {
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let htmlString = '';
        lista.forEach((e)=>{
            htmlString += `<tr><td>${e.id}</td><td>${e.nome}</td><td>${e.cognome}</td><td>${e.classe}</td></tr>`;
        });
        wrapper.innerHTML = htmlString;
    }
}

const users = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
    {id: 9, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 10, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
    {id: 11, nome: 'Davide', cognome: 'Neri', classe: 'A'},
];

p = new Pagination(users, 4);
p.getItemsShow();
const primo = document.querySelector('#primo');
primo.addEventListener('click', function(){
    p.primaPagina();
    p.getItemsShow();
});
const ultimo = document.querySelector('#ultimo');
ultimo.addEventListener('click', function(){
    p.ultimaPagina();
    p.getItemsShow();
});
const precedente = document.querySelector('#precedente');
precedente.addEventListener('click', function(){
    p.paginaPrecedente();
    p.getItemsShow();
});
const successivo = document.querySelector('#successivo');
successivo.addEventListener('click', function(){
    p.paginaSuccessiva();
    p.getItemsShow();
});


class Persona {
    constructor(nome, eta) {
        this.nome = nome;
        this.eta = eta;
    }

    comparazioneAnni(element) {
        let persona;
        if (this.eta < element.eta){
            persona = `${element.nome} è più vecchio di ${this.nome}.`
            return persona;
        }else if (this.eta > element.eta){
            persona = `${element.nome} è più giovane di ${this.nome}.`
            return persona;
        }else{
            persona = `${element.name} è della stessa età di ${this.name}.`
            return persona;
        }
    }
}
p1 = new Persona("Marco", 22)
p2 = new Persona("Paolo", 36)
p3 = new Persona("Mario", 24)
const wrapperCoparazione1 = document.querySelector('#comparazione1');
const wrapperCoparazione2 = document.querySelector('#comparazione2');
const wrapperCoparazione3 = document.querySelector('#comparazione3');

wrapperCoparazione1.innerHTML = p1.comparazioneAnni(p2)
wrapperCoparazione2.innerHTML = p2.comparazioneAnni(p1)
wrapperCoparazione3.innerHTML = p1.comparazioneAnni(p3)
console.log(p1.comparazioneAnni(p2));
console.log(p2.comparazioneAnni(p1));
console.log(p1.comparazioneAnni(p3));