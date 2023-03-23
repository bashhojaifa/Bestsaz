class SessionHelper {
  static SetToken(token) {
    localStorage.setItem("bestsazAccessToken", token);
  }
  static GetToken() {
    return localStorage.getItem("bestsazAccessToken");
  }
  static RemoveToken() {
    return localStorage.removeItem("bestsazAccessToken");
  }
  static SetLastLocation(lastLocation) {
    localStorage.setItem("lastLocation", lastLocation);
  }
  static GetLastLocation() {
    return localStorage.getItem("lastLocation");
  }
  static SetUserDetails(userDetails) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }
  static GetUserDetails() {
    return JSON.parse(localStorage.getItem("userDetails"));
  }
  static RemoveUserDetails() {
    return localStorage.removeItem("userDetails");
  }
  static RecoverVerifyEmail(Email) {
    return localStorage.setItem("RecoverVerifyEmail", Email);
  }
  static GetRecoverVerifyEmail() {
    return localStorage.getItem("RecoverVerifyEmail");
  }
  static SetRecoverVerifyOTP(OTP) {
    return localStorage.setItem("RecoverVerifyOTP", OTP);
  }
  static GetRecoverVerifyOTP() {
    return localStorage.getItem("RecoverVerifyOTP");
  }

  static SetLanguage(Language) {
    localStorage.setItem("i18nextLng", Language);
  }
  static GetLanguage() {
    return localStorage.getItem("i18nextLng");
  }
  static SetTheme(Theme) {
    localStorage.setItem("Theme", Theme);
  }
  static GetTheme() {
    return localStorage.getItem("Theme");
  }

  static SetCompare(Compare) {
    localStorage.setItem("Compare", JSON.stringify(Compare));
  }
  static GetCompare() {
    return JSON.parse(localStorage.getItem("Compare"));
  }
  static RemoveCompare() {
    return localStorage.removeItem("Compare");
  }

  static ResetStorage() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("RecoverVerifyEmail");
    localStorage.removeItem("RecoverVerifyOTP");
    return true;
  }
}

export default SessionHelper;
