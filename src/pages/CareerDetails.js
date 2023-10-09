import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quaerat
          recusandae accusamus adipisci odit possimus eligendi voluptatem.
          Voluptatum quas, consectetur mollitia quibusdam error illo ad dolorem
          quia a nisi sunt aut repudiandae nobis illum ipsum! Consequuntur,
          asperiores consequatur? Quae, omnis?
        </p>
      </div>
    </div>
  );
}

//loader fnction

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id);

      if(!res.ok){
        throw Error('cannot find career')
      }

    return res.json();
  };

  
  