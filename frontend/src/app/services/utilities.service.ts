import {Injectable} from "@angular/core";

@Injectable()
export class UtilitiesService {

  static storage: any = null;

  private static reallyIsNaN(x: any) {
    return x !== x;
  } // reallyIsNaN()

  static isEmpty(value: any): boolean {
    return !(value !== null
      && typeof value !== "undefined"
      && value != ""
      && value != "null"
      && !UtilitiesService.reallyIsNaN(value)
      && !(value.constructor === Array && value.length == 0)
      && !(typeof value == "object" && Object.keys(value).length == 0));

  } // isEmpty()

  static testFunction(): boolean {
    return true;
  }

  static storageSupported(storage: any): boolean {
    try {
      storage.setItem('test', '1');
      storage.removeItem('test');
      return true;
    } catch (error) {
      return false;
    }
  } // storageSupported()

  static isNotEmpty(value: any): boolean {
    return !this.isEmpty(value);
  }

  /**
   * converts a string of type "yyyy-MM-dd hh:mm:ss" to a timestamp
   * this prevents any changing of date based on timezones
   *
   * @param dateTimeString
   */
  static timestampFromDate(dateTimeString: any) {
    let date = new Date();
    date.setFullYear(dateTimeString.substring(0, 4), parseInt(dateTimeString.substring(5, 7), 10) - 1, dateTimeString.substring(8, 10));
    date.setHours(dateTimeString.substring(11, 13), dateTimeString.substring(14, 16), dateTimeString.substring(17, 19));
    date.setMilliseconds(0);
    return date.getTime();

  } // timestampFromDate()

  /**
   * converts a string of type "yyyy-MM-dd hh:mm:ss" to a timestamp
   * this prevents any changing of date based on timezones
   *
   * @param dateTimeString
   */
  static dateFromString(dateTimeString: any) {
    let date = new Date();
    date.setFullYear(dateTimeString.substring(0, 4), parseInt(dateTimeString.substring(5, 7), 10) - 1, dateTimeString.substring(8, 10));
    date.setHours(dateTimeString.substring(11, 13), dateTimeString.substring(14, 16), dateTimeString.substring(17, 19));
    date.setMilliseconds(0);
    return date;

  } // dateFromString()

  /**
   * converts a timestamp to a string of type "yyyy-MM-dd hh:mm:ss"
   *
   * @param timestamp
   */
  static dateFromTimestamp(timestamp: any) {
    let date = new Date(timestamp);
    let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    let day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
    let hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours();
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds();
    return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + sec;

  } // dateFromTimestamp()

  /**
   * sets the hours, minutes, and seconds of a date to 0
   * @param date
   */
  static setDateToMidnight(date: any) {
    if (date instanceof Date) {
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    }
    return date;

  } // setDateToMidnight()

  static setDateToEndOfDay(date: any) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(0);
    return date;
  } // setDateToEndOfDay()

  static getLocal(name: string) {
    if (this.isEmpty(this.storage)) {
      if (this.storageSupported(localStorage)) {
        this.storage = localStorage;
      } else if (this.storageSupported(sessionStorage)) {
        this.storage = sessionStorage;
      } else {
        return null;
      }
    }
    return this.storage.getItem(name);

  } // getLocal()

  static setLocal(name: string, value: any) {
    // if (this.testFunction()) {
    //   console.log('test')
    // }
    if (this.isEmpty(this.storage)) {
      if (this.storageSupported(localStorage)) {
        this.storage = localStorage;
      } else if (this.storageSupported(sessionStorage)) {
        this.storage = sessionStorage;
      } else {
        this.storage = this.tempStorage();
      }
    }
    this.storage.setItem(name, value);

  } // setLocal()

  static removeLocal(name: string) {
    if (this.isEmpty(this.storage)) {
      if (this.storageSupported(localStorage)) {
        this.storage = localStorage;
      } else if (this.storageSupported(sessionStorage)) {
        this.storage = sessionStorage;
      } else {
        this.storage = this.tempStorage();
      }
    }

    delete this.storage[name];
  } // removeLocal()

  static tempStorage() {
    let api = {setItem: null as any, getItem: null as any, clear: null as any};
    let store = {};
    api.setItem = function (name: any, value: any) {
      store[name] = value;
    };
    api.getItem = (name: any) => {
      return !this.isEmpty(store[name]) ? store[name] : null;
    };
    api.clear = function () {
      store = {};
    };
    return api;

  } // tempStorage()

  static clearStorage() {
    if (this.isEmpty(this.storage)) {
      if (this.storageSupported(localStorage)) {
        this.storage = localStorage;
      } else if (this.storageSupported(sessionStorage)) {
        this.storage = sessionStorage;
      } else {
        this.storage = this.tempStorage();
      }
    }

    this.storage.clear();
  } // clearStorage()

  static randomString(length: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  } // randomString()
}
