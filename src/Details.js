import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pet from "./Pet";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [pet, setPet] = useState(null);

  const params = useParams();

  useEffect(() => {
    requestPet();
    async function requestPet() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${params.id}`
      );
      const json = await res.json();
      setPet(json.pets[0]);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) return <h2>Still Loading...</h2>;
  return <Pet {...pet} />;
};

export default Details;
