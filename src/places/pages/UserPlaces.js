import React from 'react';
import PlaceList from "../../places/components/PlaceList";
import {useParams} from "react-router-dom";


const DUMMY_PLACES = [
  {
    id: Math.random(),
    title: "Empire State Building",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/33/e6.jpg",
    address: " 20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u1"
  },
  {
    id: Math.random(),
    title: "Empire State Building",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/33/e6.jpg",
    address: " 20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u2"
  }
]

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => {
    return place.creator === userId
  })
  return (
    <div>
      <PlaceList items={loadedPlaces} />
    </div>
  )
}


export default UserPlaces;