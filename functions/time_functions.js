export const calc_total_seconds = (hr, min, sec) => {
	return 3600 * hr + 60 * min + sec;
};

export const make_splits = (totalSec, totalDist, splitDist, useM) => {
	let splits = [],
		distElapsed = 0,
		timeElapsed = 0,
		unitPerSec = totalDist / totalSec;
	const splitCount = Math.ceil(totalDist / splitDist);

	for (let i = 0; i < splitCount; i++) {
		let split = []; // Array for current split that will be calculated

		// Split Column
		split.push((i + 1).toString());

		// Distance Column
		console.log(splitDist, totalDist, totalDist - splitDist);
		let dist = splitDist < totalDist ? splitDist : totalDist;
		if (dist < 0.01) {
			dist = 0.01;
		}
		distElapsed += dist;
		totalDist -= dist;
		split.push(distElapsed.toFixed(2) + " " + (useM ? "mi." : "km."));

		// Time Column
		let splitTime = Math.round(dist / unitPerSec);
		timeElapsed += splitTime;
		let time = convert_seconds(timeElapsed);

		split.push(time[0] + ":" + time[1] + ":" + time[2]);

		// Change Column
		time = convert_seconds(splitTime);
		split.push("+" + time[0] + ":" + time[1] + ":" + time[2]);

		// Add calculated split to the list of splits
		splits.push(split);
	}

	return splits;
};

function convert_seconds(seconds) {
	let time = [];

	let hour = seconds < 3600 ? 0 : Math.floor(seconds / 3600);
	time.push(hour < 10 ? "0" + hour.toString() : hour.toString());
	seconds -= hour * 3600;

	let min = seconds < 60 ? 0 : Math.floor(seconds / 60);
	time.push(min < 10 ? "0" + min.toString() : min.toString());
	seconds -= min * 60;

	seconds = Math.round(seconds);
	time.push(seconds < 10 ? "0" + seconds.toString() : seconds.toString());

	return time;
}

export const calc_pace = (dist, seconds, useM) => {
	const secondsPerUnit = Math.round(1 / (dist / seconds)); // Calculate the speed needed to run (dist / seconds) and divide 1 by the speed to calculate the pace for 1 mi or km
	const time = convert_seconds(secondsPerUnit);

	let pace = "Avg. Pace: ";
	if (time[0] != 0) {
		pace += time[0] + " hr. ";
	}

	pace += time[1] + "' " + time[2] + '" per ' + (useM ? "mi." : "km.");

	return pace;
};
