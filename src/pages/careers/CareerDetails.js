import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id} = useParams()
    const career=useLoaderData()
    return (
      <div className="career-details">
           <h2>Career Detail for {career.title}</h2>
           <p>Starting salary: {career.salary}</p>
           <p>Location: {career.location}</p>
           <div className="details">
                <p>Here goes the details for the career</p>
           </div>
      </div>
    )
  }
  //Loader function
  export const careerDetailsLoader =async ({params})=>{
    const {id}=params
    const res = await fetch('http://localhost:4000/careers/'+id)
    if(!res.ok){
        throw Error('Could not find that career')
    }
    return res.json() 
    
  }