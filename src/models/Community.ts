export type CommunityOut =  {   
  id: string
  name: string
  description: string
  municipality_id: string
  municipality: string,
  uf: string
}

export type CommunityIn = {
  name: string
  description: string
  municipality_id: string,
}