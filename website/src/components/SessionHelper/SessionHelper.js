class SessionHelper {
   static setSession(key,value){
        sessionStorage.setItem(key,value);
    }
   static getSession(key){
        return sessionStorage.getItem(key);
    }
    static removeSession(key){
       return sessionStorage.removeItem(key);
    }
}
export default SessionHelper;