export type SuggestedNames = {
  id: string
  name: string //nome da pessoa que enviou a sugestão
  fish_id: string,
  scientific_name: string
  state: string,
  municipality: string,
  community: string,
  suggestedName: string,
  status: "pending" | "approved" | "discarded"
}