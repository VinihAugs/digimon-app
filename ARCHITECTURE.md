# Arquitetura do Projeto - Clean Architecture + SOLID

Este projeto foi refatorado seguindo os princípios de **Clean Architecture** e **SOLID** para melhorar a manutenibilidade, testabilidade e escalabilidade do código.

## Estrutura de Pastas

```
src/
├── domain/                    # Camada de Domínio (regras de negócio)
│   ├── models/               # Entidades do domínio
│   │   ├── Digimon.js
│   │   └── Theme.js
│   └── constants/            # Constantes do domínio
│       ├── themes.js
│       └── digimonLevels.js
│
├── data/                      # Camada de Dados
│   ├── repositories/         # Repositórios (abstração de dados)
│   │   └── localStorageRepository.js
│   └── services/            # Serviços de negócio
│       ├── digimonService.js
│       └── paginationService.js
│
├── presentation/             # Camada de Apresentação
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Header/
│   │   ├── Logo/
│   │   ├── SearchInput/
│   │   ├── ThemeSelector/
│   │   ├── ActionButtons/
│   │   ├── SearchFilters/
│   │   ├── SearchHeader/
│   │   ├── DigimonCard/
│   │   ├── DigimonGrid/
│   │   ├── Pagination/
│   │   ├── Loading/
│   │   ├── Error/
│   │   └── EmptyState/
│   ├── hooks/               # Hooks customizados
│   │   ├── useDigimon.js
│   │   └── usePagination.js
│   └── utils/               # Utilitários de apresentação
│       └── themeUtils.js
│
├── context/                  # Contextos React
│   ├── ThemeContext.js
│   └── FavoriteDigimonContext.js
│
└── pages/                    # Páginas da aplicação
    ├── Home.js
    └── SearchPage.js
```

## Princípios SOLID Aplicados

### 1. Single Responsibility Principle (SRP)
Cada classe/componente tem uma única responsabilidade:
- `DigimonService`: Apenas lógica de negócio relacionada a Digimons
- `PaginationService`: Apenas lógica de paginação
- `LocalStorageRepository`: Apenas acesso ao localStorage
- Cada componente React: Apenas renderização de uma parte específica da UI

### 2. Open/Closed Principle (OCP)
- Os serviços podem ser estendidos sem modificar código existente
- Componentes são abertos para extensão via props, fechados para modificação

### 3. Liskov Substitution Principle (LSP)
- Models podem ser substituídos por suas instâncias sem quebrar o código
- `Digimon` e `Theme` podem ser usados como objetos simples ou instâncias de classe

### 4. Interface Segregation Principle (ISP)
- Hooks customizados expõem apenas o necessário
- Componentes recebem apenas as props que realmente usam

### 5. Dependency Inversion Principle (DIP)
- Camadas superiores não dependem de camadas inferiores
- Dependências são injetadas (ex: `DigimonService` recebe URL da API)
- Contextos usam repositórios abstratos, não implementações concretas

## Clean Architecture

### Camadas

1. **Domain Layer** (Núcleo)
   - Contém as entidades e regras de negócio
   - Não depende de nenhuma outra camada
   - Exemplos: `Digimon`, `Theme`, constantes

2. **Data Layer**
   - Implementa a lógica de acesso a dados
   - Depende apenas do Domain
   - Exemplos: `DigimonService`, `LocalStorageRepository`

3. **Presentation Layer**
   - Componentes React, hooks e utilitários de UI
   - Depende do Domain e Data
   - Exemplos: Componentes, `useDigimon`, `usePagination`

### Fluxo de Dados

```
User Interaction
    ↓
Presentation Layer (Components/Hooks)
    ↓
Data Layer (Services/Repositories)
    ↓
Domain Layer (Models/Constants)
```

## Benefícios da Refatoração

1. **Manutenibilidade**: Código organizado e fácil de encontrar
2. **Testabilidade**: Cada camada pode ser testada independentemente
3. **Reutilização**: Componentes e hooks podem ser reutilizados
4. **Escalabilidade**: Fácil adicionar novas funcionalidades
5. **Separação de Responsabilidades**: Cada arquivo tem um propósito claro
6. **Type Safety**: Models garantem estrutura consistente dos dados

## Como Usar

### Adicionar um Novo Componente

1. Criar pasta em `src/presentation/components/`
2. Criar arquivo do componente e CSS
3. Exportar no `src/presentation/components/index.js`

### Adicionar um Novo Serviço

1. Criar arquivo em `src/data/services/`
2. Seguir o padrão de injeção de dependências
3. Usar models do domain

### Adicionar uma Nova Entidade

1. Criar model em `src/domain/models/`
2. Adicionar métodos de conversão (fromApi, toJSON)
3. Usar em services e componentes

## Exemplos

### Usando um Componente
```javascript
import { DigimonCard } from '../presentation/components';

<DigimonCard digimon={digimon} textColor="white" />
```

### Usando um Hook
```javascript
import { useDigimon } from '../presentation/hooks/useDigimon';

const { digimons, loading, error } = useDigimon();
```

### Usando um Service
```javascript
import { DigimonService } from '../data/services/digimonService';

const service = new DigimonService(API_URL);
const digimons = await service.fetchAll();
```

