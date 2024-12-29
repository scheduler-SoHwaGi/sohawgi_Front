declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}
declare global {
  interface Window {
    receiveUserInfo?: (userInfo: userInfo) => void;
  }
}

export interface UserInfo {
  fullName?: string;
  email?: string;
  userIdentifier?: string;
}
