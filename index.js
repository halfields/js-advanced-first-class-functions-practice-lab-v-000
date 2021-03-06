// Code your solution in this file!
function logDriverNames(drivers) {
	const callback = function (el, i, arr) {
		console.log(el.name);
	}
	drivers.forEach(callback);
}

function logDriversByHometown(drivers, city) {
	drivers.forEach(function (driver) {
		if (driver.hometown === city) {
			console.log(driver.name);
		}
	});
}

function driversByRevenue(drivers) {
	return drivers.slice().sort(function (driver1, driver2) {
		return driver1.revenue - driver2.revenue;
	});
} 

function driversByName(drivers) {
	return drivers.slice().sort(function (driver1, driver2) {
		return driver1.name.localeCompare(driver2.name);
	});
}

function totalRevenue(drivers) {
	return drivers.reduce(function (accumulator, driver) {
		return accumulator + driver.revenue;
	}, 0);
}

function averageRevenue(drivers) {
	return totalRevenue(drivers)/drivers.length;
}
