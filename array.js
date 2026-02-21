// array.js - 配列操作ユーティリティ関数

/**
 * 配列の重複を除去する
 * @param {Array} arr - 入力配列
 * @returns {Array} 重複を除去した配列
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * ネストされた配列をフラットにする
 * @param {Array} arr - ネストされた配列
 * @param {number} [depth=Infinity] - フラット化する深さ
 * @returns {Array} フラットな配列
 */
function flatten(arr, depth = Infinity) {
  return arr.flat(depth);
}

/**
 * 配列を指定サイズのチャンクに分割する
 * @param {Array} arr - 入力配列
 * @param {number} size - チャンクサイズ
 * @returns {Array[]} チャンクの配列
 */
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = { unique, flatten, chunk };
