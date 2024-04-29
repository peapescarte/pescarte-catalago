export type SuggestedNameOut = {
  community: string,
  names: string[]
}

export type SuggestedNameIn = {
  common_name: string,
  community_id: string,
  uf: string,
  municipality: string,
}