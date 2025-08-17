
# 🏥 Farmácia API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
  <img src="https://img.shields.io/badge/TypeORM-262626?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
</p>

---

## 📑 Sumário

- [Objetivo](#-objetivo)
- [Ferramentas utilizadas](#-ferramentas-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura das Entidades](#-estrutura-das-entidades)
- [Exemplos de Requisições](#-exemplos-de-requisições)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Testes](#-testes)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Sobre](#-sobre)

## 🎯 Objetivo

Elaborar um sistema de Comércio Eletrônico de uma Farmácia, utilizando NestJS, baseado no Projeto Blog Pessoal, com foco em boas práticas, organização e requisitos do setor farmacêutico.

Este projeto visa atender às necessidades de uma farmácia moderna, otimizando o gerenciamento de medicamentos, estoque, vendas e atendimento ao cliente, além de garantir conformidade regulatória.

O sistema foi desenvolvido em etapas, conforme especificações do desafio:

- **Etapa 1:** Configuração do projeto, conexão com banco de dados e versionamento no GitHub.
- **Etapa 2:** Implementação do CRUD completo do recurso Categoria, com todos os 6 métodos REST.
- **Extras:** Recursos adicionais, como CRUD de Produto, relacionamento entre entidades, buscas parciais, validação e documentação, foram implementados para enriquecer a solução.


## 🛠️ Ferramentas utilizadas

API RESTful para gerenciamento de categorias e produtos de uma farmácia, desenvolvida com:

- **TypeScript**
- **NestJS**
- **TypeORM**
- **MySQL**
- **Insomnia**

Outras: class-validator, dotenv, GitHub para versionamento.

---

## 🚀 Funcionalidades

- Cadastro, listagem, atualização e remoção de **Categorias**
- Cadastro, listagem, atualização e remoção de **Produtos**
- Associação de produtos a categorias (1 categoria para vários produtos)
- Busca de produtos por **nome** (parcial, case-insensitive)
- Busca de produtos por **preço** (parcial)
- Atualização individual de **preço** e **quantidade**

---

## 🗂️ Estrutura das Entidades

### 📦 Categoria
| Campo     | Tipo    | Descrição                  |
|-----------|---------|----------------------------|
| id        | int     | Identificador único        |
| titulo    | string  | Nome da categoria          |
| descricao | string  | Descrição da categoria     |
| data      | date    | Data de criação            |

### 💊 Produto
| Campo      | Tipo     | Descrição                        |
|------------|----------|----------------------------------|
| id         | int      | Identificador único              |
| nome       | string   | Nome do produto                  |
| marca      | string   | Marca do produto                 |
| preco      | decimal  | Preço unitário                   |
| quantidade | int      | Quantidade em estoque            |
| descricao  | string   | Descrição do produto             |
| data       | date     | Data de criação                  |
| categoria  | Categoria| Categoria associada              |

---

## 📋 Exemplos de Requisições

### ➕ Criar Produto
`POST /produto`
```json
{
  "nome": "Enxaguante Bucal Fresh Mint",
  "marca": "Listerine",
  "preco": 17.90,
  "quantidade": 40,
  "descricao": "Enxaguante bucal antisséptico sabor menta, elimina 99% das bactérias.",
  "categoria": { "id": 5 }
}
```

### ✏️ Atualizar Preço do Produto
`PATCH /produto/2/preco`
```json
{
  "preco": 19.90
}
```

### ✏️ Atualizar Quantidade do Produto
`PATCH /produto/2/quantidade`
```json
{
  "quantidade": 50
}
```

### 🔍 Buscar Produto por Preço (parcial)
`GET /produto/preco/17`

### 🔍 Buscar Produto por Nome (parcial)
`GET /produto?nome=Enxaguante`

### 🔗 Exemplo de Resposta de Produto
```json
{
  "id": 2,
  "nome": "Enxaguante Bucal Fresh Mint",
  "marca": "Listerine",
  "preco": 17.90,
  "quantidade": 40,
  "descricao": "Enxaguante bucal antisséptico sabor menta, elimina 99% das bactérias.",
  "data": "2025-08-12T17:36:10.417Z",
  "categoria": {
    "id": 5,
    "titulo": "Higiene Bucal",
    "descricao": "Produtos para higiene bucal",
    "data": "2025-08-12T15:21:55.967Z"
  }
}
```

---


## 🛠️ Como rodar o projeto

1. **Clone o repositório:**
  ```bash
  git clone https://github.com/Lalisruiz/projeto_final_bloco_02.git
  cd projeto_final_bloco_02/farmacia
  ```
2. **Instale as dependências:**
  ```bash
  npm install
  ```
3. **Configure o arquivo `.env` com os dados do seu banco MySQL:**
  ```env
  DB_HOST=localhost
  DB_PORT=3306
  DB_USERNAME=seu_usuario
  DB_PASSWORD=sua_senha
  DB_DATABASE=nome_do_banco
  ```
4. **(Opcional) Rode as migrations:**
  ```bash
  npm run typeorm migration:run
  ```
5. **Inicie a aplicação:**
  ```bash
  npm run start:dev
  ```

---


## 🧪 Testes

Utilize o **Insomnia** ou **Postman** para testar todos os endpoints da API. Exemplos de requisições estão disponíveis acima.


## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'feat: minha nova feature'`
4. Push na branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---
## 👩‍💻 Sobre

Projeto desenvolvido para fins didáticos, utilizando boas práticas de REST, validação e organização de código.

<p align="center">
  <b>Desenvolvido por <a href="https://github.com/Lalisruiz">Lalisruiz</a> | Projeto Final Bloco 02 - Generation Brasil</b><br>
  <i>Entre em contato para dúvidas ou sugestões!</i>
</p>

---

<p align="center">
  <sub>Obrigado por visitar este repositório! ⭐</sub>
</p>
