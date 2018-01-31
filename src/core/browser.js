import bowser from 'bowser';

/**
 * ブラウザ情報の管理クラス
 * @see https://github.com/lancedikson/bowser
 */
export default class Browser {
  constructor() {}

  /**
   * IE判別
   * @return {Boolean} IEであれば true
   */
  static isIE() {
    return !!bowser.msie;
  }

  /**
   * Microsoft Edge判別
   * @return {Boolean} Edgeであれば true
   */
  static isEdge() {
    return !!bowser.msedge;
  }
}
