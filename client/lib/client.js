import sanityClient from "@sanity/client"
import imageBuilder from "@sanity/image-url"

const client = sanityClient({
   projectId: "",
   dataset: "",
   apiVersion: "",
   useCdn: true,
   token: ""
})