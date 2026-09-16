const calcFare = (distanceKm) => {
	// ตรวจสอบระยะทางก่อนคำนวณค่าโดยสาร
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm <= 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ทดสอบฟังก์ชันคำนวณค่าโดยสาร
const testCases = [
	{ distanceKm: 1, expected: 10 },
	{ distanceKm: 2, expected: 10 },
	{ distanceKm: 2.1, expected: 12 },
	{ distanceKm: 4, expected: 14 },
	{ distanceKm: -1, expected: 0 },
	{ distanceKm: "2", expected: 0 },
];

testCases.forEach(({ distanceKm, expected }) => {
	const actual = calcFare(distanceKm);
    console.log(`ทดสอบ ${distanceKm} ได้ ${actual}`);
	if (actual !== expected) {
		throw new Error(`ทดสอบไม่ผ่าน: ${distanceKm} ควรได้ ${expected} แต่ได้ ${actual}`);
	}
});

console.log("ทดสอบ calcFare ผ่านทุกกรณี");
