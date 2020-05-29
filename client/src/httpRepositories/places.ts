import { GOOGLE_MAPS_API_KEY } from "../secrets"

const searchPlace = (placeName: string) => {
  const baseURL=`https://maps.googleapis.com/maps/api/place/findplacefromtext/output=json?key=${GOOGLE_MAPS_API_KEY}`
}