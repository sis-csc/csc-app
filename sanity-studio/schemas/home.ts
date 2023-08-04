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
        },
        {
            title: "Club Description",
            name: "clubDescription",
            type: "text"
        },
        {
            title: "Achievements",
            name: "achievements",
            type: "text"
        }
    ]
}