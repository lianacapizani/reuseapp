# ReUSE app

**reUSE** é um aplicativo móvel desenvolvido com **React Native (Expo)**, criado como parte de uma atividade prática do **curso de graduação em Web Design** da **FIAP**. O projeto tem como objetivo promover a **sustentabilidade** e o **reaproveitamento de itens**, oferecendo aos usuários a possibilidade de **doar, trocar ou vender produtos usados** de maneira simples e acessível.

Este projeto envolve o uso de **APIs externas**, como a **ViaCEP** para busca de endereços e a **Mocky API** para exibição de produtos sustentáveis, além de implementar **autenticação de usuários** com login social e **armazenamento local** para garantir uma experiência personalizada e eficiente.

---

## 📱 Funcionalidades

- Splash screen com verificação de sessão
- Autenticação por e-mail/senha e login social (Google, Facebook)
- Tela de login
- Tela Home com listagem de produtos sustentáveis
- Tela de produtos (catálogo completo)
- Busca de localização por CEP via API **ViaCEP**
- Caching local (autenticação e último CEP digitado)

---

## 🔗 APIs Utilizadas

- [ViaCEP](https://viacep.com.br/) – Para buscar endereço a partir do CEP digitado
- [Mocky](https://mocky.io/) – Para simular uma API de produtos sustentáveis

---

## 🧪 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) – Para gerenciamento local de cache
- [Axios](https://axios-http.com/) – Para requisições HTTP

---

## 🛠️ Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (recomendo a versão LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (se não tiver, instale com `npm install -g expo-cli`)

---

## 🚀 Como rodar o projeto

1. Clone o repositório para a sua máquina local:

    ```bash
    git clone https://github.com/lianacapizani/reuseapp.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd reuseapp
    ```

3. Instale as dependências:

Com o repositório clonado, instale as dependências do projeto usando o `npm` ou `yarn`, dependendo do seu gerenciador de pacotes preferido.

#### Usando o npm:

```bash
npm install
```

#### Usando o Yarn:

```bash
yarn install
```

4. Inicie o projeto com Expo: 

Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento do Expo com o comando:

```bash
npx expo start
```

---

## 📱 Organização das Telas

- **SplashScreen** – Verifica autenticação e redireciona
- **LoginScreen** – Login com e-mail ou redes sociais
- **HomeScreen** – Lista de produtos + busca por CEP
- **ProductsScreen** – Catálogo completo dos produtos sustentáveis
