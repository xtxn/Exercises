function walkTime(steps, footprintLength, speed) {
    const distanceInMeters = steps * footprintLength;
    const speedMeterPerSec = speed / 3.6;
    const addedTimeInMin = Math.floor(distanceInMeters / 500);
    const timeNeededInSec = distanceInMeters / speedMeterPerSec + addedTimeInMin * 60;

    let hours = Math.floor(timeNeededInSec / 3600);
    let minutes = Math.floor((timeNeededInSec - hours * 3600) / 60);
    let seconds = Math.round(timeNeededInSec - hours * 3600) % 60;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    let formattedHours = hours.toString().padStart(2, 0);
    let formattedMinutes = minutes.toString().padStart(2, 0);
    let formattedSeconds = seconds.toString().padStart(2, 0);

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

walkTime(4000, 0.60, 5);
walkTime(2564, 0.70, 5.5);
