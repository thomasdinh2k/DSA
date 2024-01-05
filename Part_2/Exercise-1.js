// Câu lệnh điều kiện
const kiemTraSoChan = (a) => {
	if (a % 2 == 0) {
		return true;
	} else {
		return false;
	}
};

// In bảng cửu chương
const thanhPhan = (n) => {
	for (let i = 1; i < 11; i++) {
		console.log(`${n} x ${i} = ${n * i}`);
	}
};

const taoBangCuuChuong = () => {
	for (let i = 1; i < 11; i++) {
		thanhPhan(i);
	}
};

// Tính giai thừa

const tinhGiaiThua = (n) => {
	if (n < 0) return;

	let ketqua = n;
	for (let i = n - 1; i > 0; i--) {
		ketqua *= i;
	}
	console.log(ketqua);
};

// Tìm số nguyên tố
const xacDinhNguyenTo = (n) => {
	for (let i = 2; i < 10; i++) {
		if (n % i == 0 && n != i) {
			console.log(`${n} chia hết cho ${i}`);
			return false;
		}
	}
	console.log(`${n} chính là số nguyên tố`);
	return true;
};

const soNguyenTo = () => {
    let TepSoNguyen = [];
    for (let i = 2; i <= 100; i++) {
        if (xacDinhNguyenTo(i) === true) {
            console.log(`Xác định số ${i} là số nguyên tố`);
			TepSoNguyen.push(i);
        }
    }
	console.log("Tệp số Nguyên là", TepSoNguyen);
};

// Tính tổng số chẵn
const TinhTongSoChan = N => {
	let Tong = 0;
	for ( let i = 0; i <= N; i ++) {
		if (i % 2 !== 0) {
			Tong += i
		}
	}

	console.log(`Tổng các số chẵn từ 0 đến ${N} là ${Tong}`);
}

TinhTongSoChan(100);
// Vẽ hình tam giác 

const VeDongSao = n => {
	const starRow = [];
	for (let i = 1; i <=n ; i++) {
		starRow.push("*");
	}
	return starRow.join("");
}

const VeTamGiac = N => {
	for (let i = 1; i <= N; i++ ) {
		console.log(VeDongSao(i));
	}
}

// VeTamGiac(11)

const printHollowStarSquare = (m, n) => {
	// Row
	for (let i = 0; i <= m; i++) {
		// Column
		for (let j = 0; j <= n; j++) {
			if ((i == 1 || i == m) || (j == 1 || j == n)) {
				console.log("*");
			} else {
				console.log(" ");
			}
		}
		console.log("\n");
	}
}

printHollowStarSquare(3, 4)