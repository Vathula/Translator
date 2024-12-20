declare global {
    interface Window {
      google: any;  // Define google as 'any' to avoid strict typing
      googleTranslateElementInit: Function;
    }
  }
  
  export {};