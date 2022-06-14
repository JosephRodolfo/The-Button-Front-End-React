

const prod = {
    url: {
        API_URL:'https://the-button-game-enderle.herokuapp.com',
        HOST_URL: 'https://josephrodolfo.github.io/The-Button-Front-End-React/',
        CLEARDB_INC: 4
    }
}
    const dev = {
       url: {
        API_URL: 'http://localhost:2000',
        HOST_URL: 'http://localhost:3000',
        CLEARDB_INC: 1


       }
      }



      
      export const config = process.env.NODE_ENV === 'development' ? dev : prod;