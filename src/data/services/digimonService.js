import { Digimon } from "../../domain/models";

export class DigimonService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchAll() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Erro ao carregar Digimons");
      }
      const data = await response.json();
      return data.map((item) => Digimon.fromApi(item));
    } catch (error) {
      console.error("Erro ao buscar Digimons:", error);
      throw error;
    }
  }

  filterByName(digimons, searchTerm) {
    if (!searchTerm) return digimons;
    const term = searchTerm.toLowerCase().trim();
    return digimons.filter((digimon) =>
      digimon.name.toLowerCase().includes(term)
    );
  }

  filterByLevel(digimons, level) {
    if (!level) return digimons;
    return digimons.filter((digimon) => digimon.level === level);
  }

  findByName(digimons, name) {
    if (!name) return null;
    return (
      digimons.find(
        (digimon) => digimon.name.toLowerCase() === name.toLowerCase()
      ) || null
    );
  }

  filter(digimons, { searchTerm, level }) {
    let filtered = this.filterByName(digimons, searchTerm);
    filtered = this.filterByLevel(filtered, level);
    return filtered;
  }
}

