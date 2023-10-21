class StorageService {
    public retrieveIdToken(): string | null {
      try {
        const accessToken = localStorage.getItem('_id_token');
        if (!accessToken) {
          return null;
        }
        return accessToken;
      } catch (e) {
        localStorage.removeItem('_id_token');
        return null;
      }
    }
  
    public saveIdToken(idToken: string | null): void {
      if (idToken) {
        localStorage.setItem('_id_token', idToken);
      } else {
        localStorage.removeItem('_id_token');
      }
    }
  }
  
  const storageService = new StorageService();
  export default storageService;