const config = {
  
  e2e: {
    setupNodeEvents: () => {
      // Добавьте необходимую настройку setupNodeEvents
    },
    specPattern: 'cypress/integration/BurgerConstructor.spec.js',
    baseUrl: 'http://localhost:3000', // базовый URL здесь
  },
  component: {
    setupNodeEvents: () => {
      // Добавьте необходимую настройку setupNodeEvents
    },
    specPattern: '...',
  },
  viewportWidth: 1200,
  viewportHeight: 800,
  video: true,
};

export default config;
