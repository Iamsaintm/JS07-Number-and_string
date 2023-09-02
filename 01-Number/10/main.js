// จงเขียนฟังก์ชันในการแปลงค่าจากองศาเป็นเรเดียน

// <!-- PI rad = 1 * PI  === 180 -->
// <!-- PI rad = 1 * PI  === 180 -->

// <!-- 180 deg === PI rad -->
// <!-- 1  deg  ===  1*PI / 180 -->
// <!-- n deg  ===  n*PI / 180 -->

function deg(rad) {
  return rad * (180.0 / Math.PI);
}
console.log(deg(Math.PI)); // 180
