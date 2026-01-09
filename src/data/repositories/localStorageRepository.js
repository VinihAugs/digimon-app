export class LocalStorageRepository {
  constructor(key) {
    this.key = key;
  }

  save(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error(`Erro ao salvar no localStorage [${this.key}]:`, error);
      return false;
    }
  }

  load() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Erro ao carregar do localStorage [${this.key}]:`, error);
      return null;
    }
  }

  remove() {
    try {
      localStorage.removeItem(this.key);
      return true;
    } catch (error) {
      console.error(`Erro ao remover do localStorage [${this.key}]:`, error);
      return false;
    }
  }
}

