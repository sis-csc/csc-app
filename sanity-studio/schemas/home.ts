export default {
    title: "Home",
    name: "home",
    type: 'document',
    fields: [
        {
            title: "Carousel Images",
            name: "carouselImages",
            type: "array",
            of: [
                {
                    type: "image",
                }
            ]
            
        },
        {
            title: "Register Link",
            name: "registerLink",
            type: "url"
        }
    ]
}