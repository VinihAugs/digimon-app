# Estrutura do Projeto

Este documento descreve a organização completa do projeto seguindo Clean Architecture e SOLID.

## 📁 Estrutura de Diretórios

```
src/
├── config/                    # Configurações da aplicação
│   ├── api.js                # URLs de API e chaves de storage
│   └── index.js              # Barrel export
│
├── domain/                    # Camada de Domínio (Núcleo)
│   ├── models/               # Entidades do domínio
│   │   ├── Digimon.js       # Model da entidade Digimon
│   │   ├── Theme.js         # Model da entidade Theme
│   │   └── index.js         # Barrel export
│   └── constants/           # Constantes do domínio
│       ├── themes.js        # Temas disponíveis
│       ├── digimonLevels.js # Níveis de Digimon
│       └── index.js         # Barrel export
│
├── data/                      # Camada de Dados
│   ├── repositories/         # Repositórios (abstração de dados)
│   │   ├── localStorageRepository.js
│   │   └── index.js         # Barrel export
│   └── services/            # Serviços de negócio
│       ├── digimonService.js    # Lógica de negócio de Digimons
│       ├── paginationService.js # Lógica de paginação
│       └── index.js            # Barrel export
│
├── presentation/             # Camada de Apresentação
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ActionButtons/
│   │   ├── DigimonCard/
│   │   ├── DigimonGrid/
│   │   ├── EmptyState/
│   │   ├── Error/
│   │   ├── Header/
│   │   ├── Loading/
│   │   ├── Logo/
│   │   ├── Pagination/
│   │   ├── SearchFilters/
│   │   ├── SearchHeader/
│   │   ├── SearchInput/
│   │   ├── ThemeSelector/
│   │   └── index.js         # Barrel export
│   ├── hooks/               # Hooks customizados
│   │   ├── useDigimon.js    # Hook para gerenciar Digimons
│   │   ├── usePagination.js # Hook para paginação
│   │   └── index.js         # Barrel export
│   └── utils/               # Utilitários de apresentação
│       ├── themeUtils.js    # Funções utilitárias de tema
│       └── index.js         # Barrel export
│
├── context/                  # Contextos React
│   ├── ThemeContext.js      # Contexto de tema
│   └── FavoriteDigimonContext.js # Contexto de favorito
│
├── pages/                    # Páginas da aplicação
│   ├── Home.js              # Página inicial
│   └── SearchPage.js        # Página de busca
│
├── styles/                   # Estilos globais
│   ├── global.css
│   ├── home.css
│   ├── themes.css
│   └── digimonCard.css
│
├── App.js                    # Componente raiz
└── index.js                  # Entry point
```

## 📦 Organização por Tipo

### Services (`src/data/services/`)
Serviços que contêm lógica de negócio:
- `DigimonService`: Busca, filtragem e manipulação de Digimons
- `PaginationService`: Lógica de paginação

**Import:**
```javascript
import { DigimonService, PaginationService } from '../data/services';
```

### Hooks (`src/presentation/hooks/`)
Hooks customizados que encapsulam lógica reutilizável:
- `useDigimon`: Gerencia estado e lógica de Digimons
- `usePagination`: Gerencia lógica de paginação

**Import:**
```javascript
import { useDigimon, usePagination } from '../presentation/hooks';
```

### Utils (`src/presentation/utils/`)
Funções utilitárias para apresentação:
- `themeUtils`: Funções para manipular temas

**Import:**
```javascript
import { getBackgroundStyle, getTextColorClass } from '../presentation/utils';
```

### Components (`src/presentation/components/`)
Componentes React reutilizáveis organizados por funcionalidade:
- Cada componente tem sua própria pasta com JS e CSS
- Exportados via barrel export em `index.js`

**Import:**
```javascript
import { DigimonCard, SearchInput, ThemeSelector } from '../presentation/components';
```

### Models (`src/domain/models/`)
Entidades do domínio:
- `Digimon`: Model da entidade Digimon
- `Theme`: Model da entidade Theme

**Import:**
```javascript
import { Digimon, Theme } from '../domain/models';
```

### Constants (`src/domain/constants/`)
Constantes do domínio:
- `THEMES`: Lista de temas disponíveis
- `DIGIMON_LEVELS`: Níveis de Digimon
- `DEFAULT_THEME`: Tema padrão

**Import:**
```javascript
import { THEMES, DEFAULT_THEME, DIGIMON_LEVELS } from '../domain/constants';
```

### Config (`src/config/`)
Configurações da aplicação:
- `API_CONFIG`: URLs de API
- `STORAGE_KEYS`: Chaves do localStorage

**Import:**
```javascript
import { API_CONFIG, STORAGE_KEYS } from '../config';
```

## 🔄 Fluxo de Dependências

```
Pages
  ↓
Components + Hooks
  ↓
Services + Utils
  ↓
Repositories
  ↓
Domain (Models + Constants)
```

## 📝 Convenções

### Nomenclatura
- **Components**: PascalCase (ex: `DigimonCard.js`)
- **Hooks**: camelCase com prefixo `use` (ex: `useDigimon.js`)
- **Services**: PascalCase com sufixo `Service` (ex: `DigimonService.js`)
- **Utils**: camelCase (ex: `themeUtils.js`)
- **Models**: PascalCase (ex: `Digimon.js`)
- **Constants**: UPPER_SNAKE_CASE (ex: `DIGIMON_LEVELS`)

### Estrutura de Componentes
Cada componente deve ter:
```
ComponentName/
  ├── ComponentName.js
  ├── ComponentName.css
  └── index.js (opcional)
```

### Barrel Exports
Todos os diretórios principais têm `index.js` para facilitar imports:
- `src/presentation/components/index.js`
- `src/presentation/hooks/index.js`
- `src/presentation/utils/index.js`
- `src/data/services/index.js`
- `src/data/repositories/index.js`
- `src/domain/models/index.js`
- `src/domain/constants/index.js`
- `src/config/index.js`

## 🎯 Benefícios da Organização

1. **Facilidade de Navegação**: Estrutura clara e previsível
2. **Imports Limpos**: Barrel exports facilitam imports
3. **Separação de Responsabilidades**: Cada tipo de arquivo em sua pasta
4. **Escalabilidade**: Fácil adicionar novos arquivos seguindo o padrão
5. **Manutenibilidade**: Fácil encontrar e modificar código
6. **Testabilidade**: Estrutura facilita testes isolados

## 📚 Exemplos de Uso

### Criar um Novo Componente
1. Criar pasta em `src/presentation/components/NovoComponente/`
2. Criar `NovoComponente.js` e `NovoComponente.css`
3. Adicionar export em `src/presentation/components/index.js`

### Criar um Novo Hook
1. Criar arquivo em `src/presentation/hooks/useNovoHook.js`
2. Adicionar export em `src/presentation/hooks/index.js`

### Criar um Novo Service
1. Criar arquivo em `src/data/services/NovoService.js`
2. Adicionar export em `src/data/services/index.js`

### Adicionar Nova Configuração
1. Adicionar em `src/config/api.js` ou criar novo arquivo
2. Exportar em `src/config/index.js`

