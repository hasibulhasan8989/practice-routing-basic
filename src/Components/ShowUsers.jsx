import { useLoaderData, useNavigate } from "react-router-dom";

const ShowUsers = () => {
  const navigate = useNavigate();
  const showUser = useLoaderData();
  const { id, phone, website, company, address } = showUser;

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="text-center border-4 border-[#81E7AF]
        p-12 rounded-2xl bg-[#F5EEDD] space-y-2"
    >
      <h1 className="text-2xl font-bold">{id}</h1>

      <p>
        <span className="font-bold">Phone : </span>
        {phone}
      </p>

      <p>
        <span className="font-bold">Website : </span>
        {website}
      </p>

      <p>
        <span className="font-bold">Company Name : </span>
        {company.name}
      </p>

      <p>
        <span className="font-bold">Address : </span>
        {address.street}
      </p>
      <button  onClick={handleBack} className="btn bg-rose-600">
        Back
      </button>
    </div>
  );
};

export default ShowUsers;
