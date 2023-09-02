// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

newStr = "";
const ucFirst = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      newStr += str[0].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
