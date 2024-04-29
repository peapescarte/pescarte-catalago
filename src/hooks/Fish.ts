type Name = {
      name: string;
      approve: boolean;
}

type CommonName = {
      region: string;
      names: Name[];
}

type FishProps = {
      id: string;
      scientific_name: string;
      native: boolean;
      image: string;
      gears: string[];
      common_name: CommonName[];
}


export const allFish: FishProps[] = [
      {
            id: "clre0jqcw0006mvkm0p7e7i9u",
            scientific_name: 'Astynax sp.',
            native: true,
            gears: ["Tarrafa", "Anzol", "Barco Motor"],
            image: "https://images.unsplash.com/photo-1537126051263-80a6188f274a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            common_name: [{
                  region: "Campos dos Goytacazes",
                  names: [
                        {
                              name: "Lambari",
                              approve: true
                        },
                        {
                              name: "Piabinhas",
                              approve: true
                        }
                  ],
            }]
      },
      {
            id: "2",
            scientific_name: 'Geophagus brasiliensis',
            native: false,
            gears: ["Tarrafa", "Anzol", "Barco", "Motor", "Rede", "Juquiá", "Farol", "Bateria", "Fisga"],
            image: "https://www.fishipedia.fr/wp-content/uploads/2014/05/Geophagus-brasiliensis-725x483.jpg",
            common_name: [{
                  region: "Praia Rasa",
                  names: [
                        {
                              name: "Acará",
                              approve: true
                        }
                  ],
            }]
      },
      {
            id: "3",
            scientific_name: 'Astynax sp.',
            native: true,
            gears: ["Tarrafa", "Anzol", "Barco Motor"],
            image: "https://images.unsplash.com/photo-1537126051263-80a6188f274a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            common_name: [{
                  region: "Campos dos Goytacazes",
                  names: [
                        {
                              name: "Lambari",
                              approve: true
                        },
                        {
                              name: "Piabinhas",
                              approve: true
                        }
                  ],
            }]
      },
      {
            id: "4",
            scientific_name: 'Astynax sp.',
            native: true,
            gears: ["Tarrafa", "Anzol", "Barco Motor"],
            image: "https://images.unsplash.com/photo-1537126051263-80a6188f274a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            common_name: [{
                  region: "Campos dos Goytacazes",
                  names: [
                        {
                              name: "Lambari",
                              approve: true
                        },
                        {
                              name: "Piabinhas",
                              approve: true
                        }
                  ],
            }]
      },
      {
            id: "5",
            scientific_name: 'Astynax sp.',
            native: true,
            gears: ["Tarrafa", "Anzol", "Barco Motor"],
            image: "https://images.unsplash.com/photo-1537126051263-80a6188f274a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            common_name: [{
                  region: "Campos dos Goytacazes",
                  names: [
                        {
                              name: "Lambari",
                              approve: true
                        },
                        {
                              name: "Piabinhas",
                              approve: true
                        }
                  ],
            }]
      },
]