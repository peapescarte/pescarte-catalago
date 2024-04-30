// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// export const useSearchForm = () => {
//   const searchFormSchema = z.object({
//     scientific_name: z.string().max(50).optional(),
//     common_name: z.string().optional(),
//     uf: z.string().max(2).optional(),
//     municipality_id: z.string().optional(),
//     community: z.string().optional(),
//   })

//   type SearchFormValues = z.infer<typeof searchFormSchema>

//   const defaultValues: Partial<SearchFormValues> = {
//     uf: "RJ",
//     municipality_id: "",
//   }

//   const form = useForm<SearchFormValues>({
//     resolver: zodResolver(searchFormSchema),
//     defaultValues,
//     mode: "onChange",
//   })
  
//   // const onSubmit = (data: SearchFormValues) => {
//   //   // eslint-disable-next-line react-hooks/rules-of-hooks
//   //   const router = useRouter();
//   //   router.push({
//   //     pathname: '/home',
//   //     // query: {
//   //     //   scientific_name: data.scientific_name,
//   //     //   common_name: data.common_name,
//   //     //   community_id: data.community,
//   //     // },
//   //   });
//   //   // FishService.getFishByFilter({
//   //   //   scientific_name: data.scientific_name,
//   //   //   common_name: data.common_name,
//   //   //   community_id: data.community,
//   //   // })
//   // }

//   return {
//     form,
//     se
//   }
// }  


