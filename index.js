// Linear × GitHub × VSCode 連携テスト用のサンプルコード

/**
 * 挨拶メッセージを返す
 * @param {string} name - 名前
 * @returns {string} 挨拶メッセージ
 */
function greet(name) {
  return `こんにちは、${name}さん！`;
}

/**
 * 足し算
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// math モジュールの読み込み
const { subtract, multiply, divide } = require("./math");

// テスト実行
console.log(greet("Linear"));
console.log(`1 + 2 = ${add(1, 2)}`);
console.log(`5 - 3 = ${subtract(5, 3)}`);
console.log(`4 × 6 = ${multiply(4, 6)}`);
console.log(`10 ÷ 2 = ${divide(10, 2)}`);
