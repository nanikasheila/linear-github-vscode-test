// utils.js - 汎用ユーティリティ関数

/**
 * 指定範囲の数列を生成する
 * @param {number} start - 開始値
 * @param {number} end - 終了値（含まない）
 * @param {number} [step=1] - ステップ
 * @returns {number[]} 数列
 */
function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * 配列をシャッフルする（Fisher-Yates）
 * @param {Array} arr - 入力配列
 * @returns {Array} シャッフルされた新しい配列
 */
function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 指定ミリ秒だけ待機する
 * @param {number} ms - 待機ミリ秒
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { range, shuffle, sleep };
