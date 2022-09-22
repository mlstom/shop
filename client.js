import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'fojxc679',
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn:false,
    token:'sk9IE2yc2L0oJ3kF35aR1ajzi9Mjk5QkfTnm5lBzD34si9FKaZyETTj9x0POrz7TJQ0tMzCaS8J2n2ZdibBgcoyHGHrmC0WsrLeCKPEHAE1BL4cTeb8ut9ce8RbXUF1NEYw3M2s63w4IOOrIYPrJKPB79RVJDlWFhJ9BY9Og6c3UjD4AAtaA',
    ignoreBrowserTokenWarning:true
})

const builder = imageUrlBuilder(client)
export const urlFor = (source)=> builder.image(source)