// math.js - 追加の数学ユーティリティ関数

/**
 * 引き算
 * @param {number} a - 被減数
 * @param {number} b - 減数
 * @returns {number} 差
 */
function subtract(a, b) {
  return a - b;
}

/**
 * 掛け算
 * @param {number} a - 被乗数
 * @param {number} b - 乗数
 * @returns {number} 積
 */
function multiply(a, b) {
  return a * b;
}

/**
 * 割り算
 * @param {number} a - 被除数
 * @param {number} b - 除数
 * @returns {number} 商
 * @throws {Error} 0で割った場合
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("0で割ることはできません");
  }
  return a / b;
}

module.exports = { subtract, multiply, divide };
