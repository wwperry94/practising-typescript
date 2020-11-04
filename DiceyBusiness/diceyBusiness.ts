document.addEventListener("DOMContentLoaded", function () {
    let myInterval: number;
    let diceContainer: HTMLElement = document.getElementById('dice');
    document.body.appendChild(diceContainer);
    let idArray: Dice[] = [];
    class Dice {
        addDice: HTMLDivElement;
        constructor(public value: number) {
            this.addDice = document.createElement('div');
            this.addDice.className = 'egg';
            diceContainer.appendChild(this.addDice);
            this.addDice.style.backgroundColor = "black";
            this.addDice.style.height = "100px";
            this.addDice.style.width = "100px";
            this.addDice.style.borderRadius = "15px";
            this.addDice.style.margin = "15px";
            this.addDice.style.color = "white";
            this.addDice.style.textAlign = "center";
            this.addDice.style.verticalAlign = "middle";
            this.addDice.style.lineHeight = "100px";
            this.addDice.style.fontSize = "100px";
            switch (this.value) {
                case 1:
                    this.addDice.textContent = '\u2680'
                    break;
                case 2:
                    this.addDice.textContent = '\u2681'
                    break;
                case 3:
                    this.addDice.textContent = '\u2682'
                    break;
                case 4:
                    this.addDice.textContent = '\u2683'
                    break;
                case 5:
                    this.addDice.textContent = '\u2684'
                    break;
                case 6:
                    this.addDice.textContent = '\u2685'
                    break;
                default:
            };
            idArray.push(this);
            this.addDice.addEventListener('click', () => {
                this.rollDice();
            });
            this.addDice.addEventListener('dblclick', () => {
                this.addDice.remove();
                idArray.splice(idArray.indexOf(this), 1);
            });
        };
        rollDice = () => {
            this.value = (Math.floor(Math.random() * 6) + 1);
            switch (this.value) {
                case 1:
                    this.addDice.textContent = '\u2680'
                    break;
                case 2:
                    this.addDice.textContent = '\u2681'
                    break;
                case 3:
                    this.addDice.textContent = '\u2682'
                    break;
                case 4:
                    this.addDice.textContent = '\u2683'
                    break;
                case 5:
                    this.addDice.textContent = '\u2684'
                    break;
                case 6:
                    this.addDice.textContent = '\u2685'
                    break;
                default:
            };
        };
    };
    document.getElementById('rollbtn').addEventListener('click', () => {
        new Dice(Math.floor(Math.random() * 6) + 1);
    });
    document.getElementById('rerollbtn').addEventListener('click', () => {
        idArray.forEach(
            (die) => {
                die.rollDice();
            });
    });
    document.getElementById('sumbtn').addEventListener('click', () => {
        let sumTotal = 0;
        idArray.forEach(itm => {
            if (itm.value) {
                sumTotal += itm.value;
            };
        });
        alert(`The Sum of the Die is ${sumTotal}`)
    });
    //  <Extras>  \\
    function getRandomColor() {
        var letters: string = '0123456789ABCDEF';
        var color: string = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        return color;
    };
    // <EASTER EGG> \\
    let easterTime: HTMLElement = document.getElementById("spinny");
    let showTime: HTMLElement = document.getElementById("easterEgg");
    easterTime.addEventListener('dblclick', () => {
        let easterEgg1 = <HTMLButtonElement>document.getElementById('rollbtn');
        let easterEgg2 = <HTMLButtonElement>document.getElementById('rerollbtn');
        let easterEgg3 = <HTMLButtonElement>document.getElementById('sumbtn');
        let eggs = <HTMLDivElement[]> document.getElementsByClassName('egg');
        let timeStart: boolean = true;
        if (timeStart === true) {
            myInterval = setInterval(() => {
                let seconds: number = 0;
                seconds++;
                easterEgg1.style.backgroundColor = getRandomColor();
                easterEgg2.style.backgroundColor = getRandomColor();
                easterEgg3.style.backgroundColor = getRandomColor();
                for (let i = 0; i < eggs.length; i++) {
                    eggs.item(i).style.backgroundColor = getRandomColor();
                };
            }, 100)
        };
        timeStart = false
        console.log("the SEYcret == sweet?")
        showTime.play();
        easterTime.addEventListener('click', () => {
            let showTime: HTMLElement = document.getElementById("easterEgg");
            clearInterval(myInterval);
            showTime.pause();
        });
    });
});