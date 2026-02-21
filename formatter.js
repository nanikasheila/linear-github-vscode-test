// formatter.js - フォーマットユーティリティ関数

/**
 * 文字列を指定幅になるよう先頭を埋める
 * @param {string|number} value - 入力値
 * @param {number} width - 目標幅
 * @param {string} [fill="0"] - 埋め文字
 * @returns {string} パディングされた文字列
 */
function padStart(value, width, fill = "0") {
  return String(value).padStart(width, fill);
}

/**
 * 数値を3桁カンマ区切りでフォーマットする
 * @param {number} num - 入力値
 * @returns {string} フォーマットされた文字列
 */
function formatNumber(num) {
  return num.toLocaleString("ja-JP");
}

/**
 * Dateオブジェクトを YYYY-MM-DD 形式にフォーマットする
 * @param {Date} date - 日付
 * @returns {string} フォーマットされた日付文字列
 */
function formatDate(date) {
  const y = date.getFullYear();
  const m = padStart(date.getMonth() + 1, 2);
  const d = padStart(date.getDate(), 2);
  return `${y}-${m}-${d}`;
}

module.exports = { padStart, formatNumber, formatDate };
