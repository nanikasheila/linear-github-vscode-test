// string.js - 文字列操作ユーティリティ関数

/**
 * 文字列を反転する
 * @param {string} str - 入力文字列
 * @returns {string} 反転した文字列
 */
function reverse(str) {
  return [...str].reverse().join("");
}

/**
 * 文字列の先頭を大文字にする
 * @param {string} str - 入力文字列
 * @returns {string} 先頭が大文字の文字列
 */
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 文字列を指定長で切り詰める
 * @param {string} str - 入力文字列
 * @param {number} maxLength - 最大長
 * @param {string} [suffix="..."] - 省略時に付加する文字列
 * @returns {string} 切り詰めた文字列
 */
function truncate(str, maxLength, suffix = "...") {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

module.exports = { reverse, capitalize, truncate };
