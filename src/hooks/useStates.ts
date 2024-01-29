import { axiosClient } from "@/lib/axios"

export const useStates = () => {
  const states = [
    { acronym: "RJ", name: "Rio de Janeiro" },
    { acronym: "SP", name: "São Paulo" },
  ];

  return {
    states,
  }
}