import CLog from '../Scripts/output';
function log(msg) {
    try {
        CLog(msg);
    }
    catch (e) {
    }
}
class Info {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
