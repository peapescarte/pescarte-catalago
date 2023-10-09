type SuggestionNames = {
      id: string,
      scientific_name: string,
      name: string,
      fish_id: string,
      state: string,
      municipality: string,
      region: string,
      suggestionName: string,
      status: string,

}

export const useNames = () => {
      const names: SuggestionNames[] = [
            {
                  id: '1',
                  name: 'Maria Doe',
                  scientific_name: 'Astynax sp.',
                  fish_id: '1',
                  state: 'RJ',
                  municipality: 'Búzios',
                  region: 'Campos dos Goytacazes',
                  suggestionName: 'Patinha',
                  status:'received'
            },
            {
                  id: '2',
                  name: 'Joh Doe',
                  scientific_name: 'Gymnarchus niloticus',
                  fish_id: '2',
                  state: 'RJ',
                  municipality: 'Itaguai',
                  region: 'Ilha das flores',
                  suggestionName: 'Lua',
                  status:'approved'
            },
            {
                  id: '3',
                  name: 'Carla Kosch',
                  scientific_name: 'Astynax sp.',
                  fish_id: '1',
                  state: 'RJ',
                  municipality: 'Ibituporanga',
                  region: 'Rio menor',
                  suggestionName: 'Calia',
                  status:'discarded'
            },
            {
                  id: '4',
                  name: 'Lara Moshc',
                  scientific_name: 'Astynax sp.',
                  fish_id: '1',
                  state: 'RJ',
                  municipality: 'Seropédica',
                  region: 'Mamburi',
                  suggestionName: 'Manba',
                  status:'received'
            }
      ]

      return {
            names,
      }
}