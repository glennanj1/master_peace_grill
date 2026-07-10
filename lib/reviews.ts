// Real customer reviews pulled verbatim from the Yelp API snapshot in db.json.
// NEVER invent reviews, ratings, or an aggregateRating.

export type Review = {
  author: string
  text: string
  rating: number
  url: string
  date: string
}

export const REVIEWS: Review[] = [
  {
    author: 'Katherine G.',
    text: "Having moved the country's cheesesteak capital, I make it a point to try one every once and while as I roam the Philly suburbs.   I am very glad I stopped...",
    rating: 5,
    url: 'https://www.yelp.com/biz/masterpeace-grill-conshohocken-3?adjust_creative=DCaGvhlr9p58Z_Duqi_uSg&hrid=LLlWEsHlNx345Ar7N31Fag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DCaGvhlr9p58Z_Duqi_uSg',
    date: '2022-11-23',
  },
  {
    author: 'Karen T.',
    text: 'Stopped by to get the tiger steak, which is similar to a Philly cheesesteak except it has a combo of steak, chicken and bacon. Roll was soft and fresh and...',
    rating: 5,
    url: 'https://www.yelp.com/biz/masterpeace-grill-conshohocken-3?adjust_creative=DCaGvhlr9p58Z_Duqi_uSg&hrid=ldTzRa_-VZ4OF8S3PzWzlA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DCaGvhlr9p58Z_Duqi_uSg',
    date: '2022-11-08',
  },
  {
    author: 'Dave C.',
    text: 'Loved It - Service Takes it to Five Stars\n\nVisited for lunch in early August. We obviously had to order the cheesesteak after all the signs of winning...',
    rating: 5,
    url: 'https://www.yelp.com/biz/masterpeace-grill-conshohocken-3?adjust_creative=DCaGvhlr9p58Z_Duqi_uSg&hrid=lE-rIaK8J1WFqENvsG7xhg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DCaGvhlr9p58Z_Duqi_uSg',
    date: '2022-08-18',
  },
]
