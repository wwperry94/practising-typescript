document.addEventListener("DOMContentLoaded", function () {
    var myInterval;
    var diceContainer = document.getElementById('dice');
    document.body.appendChild(diceContainer);
    var idArray = [];
    var Dice = /** @class */ (function () {
        function Dice(value) {
            var _this = this;
            this.value = value;
            this.rollDice = function () {
                _this.value = (Math.floor(Math.random() * 6) + 1);
                switch (_this.value) {
                    case 1:
                        _this.addDice.textContent = '\u2680';
                        break;
                    case 2:
                        _this.addDice.textContent = '\u2681';
                        break;
                    case 3:
                        _this.addDice.textContent = '\u2682';
                        break;
                    case 4:
                        _this.addDice.textContent = '\u2683';
                        break;
                    case 5:
                        _this.addDice.textContent = '\u2684';
                        break;
                    case 6:
                        _this.addDice.textContent = '\u2685';
                        break;
                    default:
                }
                ;
            };
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
                    this.addDice.textContent = '\u2680';
                    break;
                case 2:
                    this.addDice.textContent = '\u2681';
                    break;
                case 3:
                    this.addDice.textContent = '\u2682';
                    break;
                case 4:
                    this.addDice.textContent = '\u2683';
                    break;
                case 5:
                    this.addDice.textContent = '\u2684';
                    break;
                case 6:
                    this.addDice.textContent = '\u2685';
                    break;
                default:
            }
            ;
            idArray.push(this);
            this.addDice.addEventListener('click', function () {
                _this.rollDice();
            });
            this.addDice.addEventListener('dblclick', function () {
                _this.addDice.remove();
                idArray.splice(idArray.indexOf(_this), 1);
            });
        }
        ;
        return Dice;
    }());
    ;
    document.getElementById('rollbtn').addEventListener('click', function () {
        new Dice(Math.floor(Math.random() * 6) + 1);
    });
    document.getElementById('rerollbtn').addEventListener('click', function () {
        idArray.forEach(function (die) {
            die.rollDice();
        });
    });
    document.getElementById('sumbtn').addEventListener('click', function () {
        var sumTotal = 0;
        idArray.forEach(function (itm) {
            if (itm.value) {
                sumTotal += itm.value;
            }
            ;
        });
        alert("The Sum of the Die is " + sumTotal);
    });
    //  <Extras>  \\
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        ;
        return color;
    }
    ;
    // <EASTER EGG> \\
    var easterTime = document.getElementById("spinny");
    var showTime = document.getElementById("easterEgg");
    easterTime.addEventListener('dblclick', function () {
        var easterEgg1 = document.getElementById('rollbtn');
        var easterEgg2 = document.getElementById('rerollbtn');
        var easterEgg3 = document.getElementById('sumbtn');
        var eggs = document.getElementsByClassName('egg');
        var timeStart = true;
        if (timeStart === true) {
            myInterval = setInterval(function () {
                var seconds = 0;
                seconds++;
                easterEgg1.style.backgroundColor = getRandomColor();
                easterEgg2.style.backgroundColor = getRandomColor();
                easterEgg3.style.backgroundColor = getRandomColor();
                for (var i = 0; i < eggs.length; i++) {
                    eggs.item(i).style.backgroundColor = getRandomColor();
                }
                ;
            }, 100);
        }
        ;
        timeStart = false;
        console.log("the SEYcret == sweet?");
        showTime.play();
        easterTime.addEventListener('click', function () {
            var showTime = document.getElementById("easterEgg");
            clearInterval(myInterval);
            showTime.pause();
        });
    });
});
