const mongoose = require( "mongoose" ) ;
const movieSchema = mongoose.Schema( {
    id: { 
        type: Number , 
        require: true 
    } ,
    name: { 
        type: String , 
        require: true 
    } ,
    adult: { 
        type: Boolean , 
        require: true , 
        default: "false"
    } ,
	poster_path: { 
        type: String , 
        require: true 
    } ,
    genre_ids: {
        type: [ Number ] ,
        require: true ,
        default: []
    } ,
	overview: { 
        type: String , 
        require: true
    }
} );

module.exports = mongoose.model( "Movie" , movieSchema) ;

/* 
    "adult": false,
            "backdrop_path": "/1Q7HS0d3gGsN5MOI4all8zYU0gq.jpg",
            "id": 232125,
            "name": "I Am Groot",
            "original_language": "en",
            "original_name": "I Am Groot",
            "overview": "There’s no guarding the galaxy from this mischievous toddler! Get ready as Baby Groot takes center stage in his very own collection of shorts, exploring his glory days growing up and getting into trouble among the stars.",
            "poster_path": "/3QfQYECgu6DX5UUWCBvv1Fl0BAJ.jpg",
            "media_type": "tv",
            "genre_ids": [
                16,
                35,
                10751,
                10765
            ],
            "popularity": 155.889,
            "first_air_date": "2022-08-10",
            "vote_average": 7.755,
            "vote_count": 55,
            "origin_country": [
                "US"
            ]
*/
