export interface IConfig {
    client: {
      server: {
        protocol: string;
        host: string;
      };
      endpoint: {
        [key: string]: {
          method: string;
          uri: {
            pathname: string;
          };
        };
      };
    };
};
  
export const configEndpoint: IConfig = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                uri: {
                    pathname: '/api/v1/pokemons',
                }
            },
            getPokemon: {
              method: 'GET',
              uri: {
                  pathname: '/api/v1/pokemon/{id}',
              }           
            },
            getPokemonTypes: {
              method: 'GET',
              uri: {
                  pathname: '/api/v1/types',
              }
            },
        }
    }
}

export type ConfigEndpointKeyType = keyof typeof configEndpoint.client.endpoint;