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
 * 時間帯に応じた挨拶メッセージを返す
 * @param {string} name - 名前
 * @param {number} hour - 時刻（0-23）
 * @returns {string} 挨拶メッセージ
 */
function greetByTime(name, hour) {
  if (hour >= 5 && hour < 12) {
    return `おはようございます、${name}さん！`;
  } else if (hour >= 12 && hour < 18) {
    return `こんにちは、${name}さん！`;
  } else {
    return `こんばんは、${name}さん！`;
  }
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
const { subtract, multiply, divide, power, modulo } = require("./math");

// string モジュールの読み込み
const { reverse, capitalize, truncate } = require("./string");

// array モジュールの読み込み
const { unique, flatten, chunk } = require("./array");

// validator モジュールの読み込み
const { isEmail, isPositive, isInRange } = require("./validator");

// formatter モジュールの読み込み
const { padStart, formatNumber, formatDate } = require("./formatter");

// テスト実行
console.log("=== 挨拶テスト ===");
console.log(greet("Linear"));
console.log(greetByTime("Linear", 8));   // 朝
console.log(greetByTime("Linear", 14));  // 昼
console.log(greetByTime("Linear", 20));  // 夜

console.log("\n=== 数学テスト ===");
console.log(`1 + 2 = ${add(1, 2)}`);
console.log(`5 - 3 = ${subtract(5, 3)}`);
console.log(`4 × 6 = ${multiply(4, 6)}`);
console.log(`10 ÷ 2 = ${divide(10, 2)}`);

// math 追加関数のテスト
console.log(`2 ^ 10 = ${power(2, 10)}`);
console.log(`17 % 5 = ${modulo(17, 5)}`);

// string モジュールのテスト
console.log(`reverse("hello") = ${reverse("hello")}`);
console.log(`capitalize("world") = ${capitalize("world")}`);
console.log(`truncate("こんにちは世界", 5) = ${truncate("こんにちは世界", 5)}`);

// array モジュールのテスト
console.log(`unique([1,2,2,3]) = ${JSON.stringify(unique([1, 2, 2, 3]))}`);
console.log(`flatten([[1,2],[3,[4]]]) = ${JSON.stringify(flatten([[1, 2], [3, [4]]]))}`);
console.log(`chunk([1,2,3,4,5], 2) = ${JSON.stringify(chunk([1, 2, 3, 4, 5], 2))}`);

// validator モジュールのテスト
console.log(`\n=== バリデーションテスト ===`);
console.log(`isEmail("test@example.com") = ${isEmail("test@example.com")}`);
console.log(`isEmail("invalid") = ${isEmail("invalid")}`);
console.log(`isPositive(5) = ${isPositive(5)}`);
console.log(`isPositive(-3) = ${isPositive(-3)}`);
console.log(`isInRange(5, 1, 10) = ${isInRange(5, 1, 10)}`);
console.log(`isInRange(15, 1, 10) = ${isInRange(15, 1, 10)}`);

// formatter モジュールのテスト
console.log(`\n=== フォーマットテスト ===`);
console.log(`padStart(42, 5) = ${padStart(42, 5)}`);
console.log(`formatNumber(1234567) = ${formatNumber(1234567)}`);
console.log(`formatDate(new Date(2026, 1, 21)) = ${formatDate(new Date(2026, 1, 21))}`);

