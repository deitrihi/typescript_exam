import CLog from '../Scripts/output'
function log(msg:string) {
    try {
        CLog(msg);
    } catch(e) {
        CLog(e);
    }
}
log('deitrihi develop feature/FP-12345 second');
class Info {
    _name : string;
    _age : number;
    constructor(name:string, age:number) {
        this._name = name;
        this._age = age;
    }
}