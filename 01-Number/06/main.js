// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random(1, 2));
