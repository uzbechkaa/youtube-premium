import { DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, Home, LiveTv, Movie, MusicNote, School, SportsEsports, TheaterComedy } from "@mui/icons-material"

export const colors ={
    primary : '#9BA4B5' ,
    secondary : '#9BA4B5'
}
export const category = [
    {name : "New" , icon :  <Home/> , path : '/'},
    {name : "Movie" , icon :  <Movie/> , path : '/movie'},
    {name : "Live" , icon :  <LiveTv/> , path : '/live'},
    {name : "Gaming" , icon :  <SportsEsports/> , path : '/gaming'},
    {name : "Education" , icon :  <School/> , path : '/edu'},
    {name : "Sport " , icon :  <FitnessCenter/> , path : '/sport'},
    {name : "Comedy " , icon :  <TheaterComedy/> , path : '/comedy'},
    {name : "Podcast " , icon :  <GraphicEq/> , path : '/podcast'},
    {name : "Crypto " , icon :  <DeveloperMode/> , path : '/crypo'},
    {name : "Gym " , icon :  <FitnessCenter/> , path : '/gym'},
    {name : "Beeaty " , icon :  <FaceRetouchingNatural/> , path : '/beaty'},
    {name : "Music " , icon :  <MusicNote/> , path : '/music'},
]