// 캔버스에 맞춰 이미지 fill
export default function scaleToFit(img, canvas) {
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const x = canvas.width / 2 - (img.width / 2) * scale;
  const y = canvas.height / 2 - (img.height / 2) * scale;
  const ctx = canvas.getContext('2d');
  ctx.filter = 'blur(15px)';
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}
