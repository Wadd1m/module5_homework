// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.


let mapa = new Map ();

mapa.set('AaA', 'BbB');
mapa.set(45744, 'CcC');
mapa.set('DdD', 9778);
mapa.set(454354, 11074);

for (let [key, value] of mapa) {
  console.log(`${key} - X , ${value} - Y`)
}