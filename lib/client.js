import sanityClient from "@sanity/client"
import imageBuilder from "@sanity/image-url"

const client = sanityClient({
   projectId: "8u1vrmu6",
   dataset: "production",
   apiVersion: "2022-10-16",
   useCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})