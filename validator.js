// validator.js - 入力値バリデーション関数

/**
 * メールアドレスの簡易バリデーション
 * @param {string} email - メールアドレス
 * @returns {boolean} 有効ならtrue
 */
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 正の数かどうかを判定する
 * @param {number} n - 入力値
 * @returns {boolean} 正の数ならtrue
 */
function isPositive(n) {
  return typeof n === "number" && n > 0;
}

/**
 * 値が範囲内かどうかを判定する
 * @param {number} value - 入力値
 * @param {number} min - 最小値（含む）
 * @param {number} max - 最大値（含む）
 * @returns {boolean} 範囲内ならtrue
 */
function isInRange(value, min, max) {
  return typeof value === "number" && value >= min && value <= max;
}

module.exports = { isEmail, isPositive, isInRange };
