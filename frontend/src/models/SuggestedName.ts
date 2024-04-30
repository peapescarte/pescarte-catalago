export type SuggestedNameIn = {
  name: string,
  email: string,
  suggested_name: string,
  fish_id: string
  community_id: string
}

export type SuggestedNameResponse = SuggestedNameIn & {
  id: string,
  status: string
}

export type SuggestedNameOut = SuggestedNameResponse & {
  scientific_name: string
  municipality: string
  community: string
}

export type SuggestedNameOutProps = SuggestedNameOut & {
 image_data: string | null
 uf: string
}