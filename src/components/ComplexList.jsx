import React from "react";

const ComplexList = () => {
  const staff = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      role: "Chief Operating Office",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
      name: "Peter Pan",
      role: "Head of Finance",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=",
      name: "Jane Doe",
      role: "Head of Marketing",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
      name: "Liu Kang",
      role: "Creating Director",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
      name: "Sonya Blade",
      role: "Admin Officer",
    },
  ];

  return (
    <div className="bg-blue-200 py-10">
      <h1 className="text-center text-blue-500 text-4xl font-bold">
        Meet The Team
      </h1>
      <p className="my-5 text-center text-md text-black w-[600px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint
        deserunt possimus saepe, animi dolorem voluptatum ullam repellendus a
        quos quisquam harum voluptatem? Laboriosam, dolores accusamus quia nulla
        perferendis voluptatibus?
      </p>
      <div className="flex gap-3.5 max-w-[1000px] flex-wrap mx-auto">
        {staff.map((member) => {
          const { id, image, name, role } = member;
          return (
            <div key={id} className="w-[320px] bg-white p-2.5 rounded-md">
              <img
                src={image}
                alt={name}
                className="rounded-md h-[300px] w-full object-cover"
              />
              <h1 className="text-blue-900 font-bold text-2xl mt-3">{name}</h1>
              <p className="text-gray-400 font-semibold">{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexList;
