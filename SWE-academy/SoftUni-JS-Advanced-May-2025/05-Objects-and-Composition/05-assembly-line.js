function createAssemblyLine() {
    let carExtras = {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                this.temp < this.tempSettings ? this.temp++ : this.temp--;
            }
        },
        hasAudio(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function () {
                console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
            }
        },
        hasParktronic(obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.50) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    };
    return carExtras;
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);