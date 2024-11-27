export function authentication(): boolean {  
  if (document.cookie) {
    return true
  } else {
    return false;
  }
}