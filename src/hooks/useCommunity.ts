import { axiosClient } from "@/libs/axios"

export const useCommunity = (state?: string, municipality?: string) => {
  const communities = [ 
    { id: "clre0ethl0001mvkmcgwigee6", name: "Armação", municipality: "Niteroi", state: "Rio de Janeiro" },
    { id: "GERIBÁ", name: "Geribá", municipality: "Niteroi", state: "Rio de Janeiro" },
    { id: "MANGUINHOS", name: "Manguinhos", municipality: "Santos", state: "São Paulo" },
    { id: "PRAIADOSOSSOS", name: "Praia Dos Ossos", municipality: "Santos", state: "São Paulo" },
    
  ];

  return {
    communities,
  }
}