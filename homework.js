// ฟังก์ชันคำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม.แรก 10 บาท กม.ถัดไปคิด กม.ละ 2 บาท เศษของกม.ปัดขึ้น
// ระยะทางติดลบหรือไม่ใช่ตัวเลข ให้คืน 0
const calcFare = (distanceKm) => {
	// ตรวจสอบระยะทางก่อนคำนวณค่าโดยสาร
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm <= 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(calcFare(1));    // 10 (ไม่เกิน 2 กม.)
console.log(calcFare(2));    // 10 (ไม่เกิน 2 กม.)
console.log(calcFare(2.1));  // 12 (ปัดขึ้นเป็น 3 กม. = 10 + 1*2)
console.log(calcFare(4));    // 14 (10 + 2*2)
console.log(calcFare(-1));   // 0 (ระยะทางติดลบ)
console.log(calcFare("2"));  // 0 (ไม่ใช่ตัวเลข)