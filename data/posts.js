import { users } from "./users"
export const posts = [
    {
        imageUrl: "https://source.unsplash.com/random/?blogs/",
        user: users[0].name,
        likes: 7645447,
        caption: 'Wow! this build looks fire.Super excited about this journey.This build looks fire.Super excited about this journey',
        profile_picture: users[0].image,
        comments: [
            {
                user: 'i.aman',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'Wow! this build looks fire.Super excited about this journey'
            },
            {
                user: 'i.nisha.me',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'this is another comment excited about this journey'
            }
        ]
    },
    {
        imageUrl: "https://source.unsplash.com/random/?cars/",
        user: users[1].name,
        likes: 76557,
        caption: 'Wow! this build looks fire.Super excited about this journey.This build looks fire.Super excited about this journey',
        profile_picture: users[1].image,
        comments: [
            {
                user: 'i.aman',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'Wow! this build looks fire.Super excited about this journey'
            },
            {
                user: 'i.nisha.me',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'this is another comment excited about this journey'
            }
        ]
    },
    {
        imageUrl: "https://source.unsplash.com/random/?country/",
        user: users[1].name,
        likes: 767545,
        caption: 'Wow! this build looks fire.Super excited about this journey.This build looks fire.Super excited about this journey',
        profile_picture: users[2].image,
        comments: [
            {
                user: 'i.aman',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'Wow! this build looks fire.Super excited about this journey'
            },
            {
                user: 'i.nisha.me',
                image:'https://robohash.org/etlaboriosamodio.png?size=50x50&set=set1',
                comment: 'Wow! this build looks fire.Super excited about this journey'
            }
        ]
    },

]