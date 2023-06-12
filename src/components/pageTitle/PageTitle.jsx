import React from 'react';

const PageTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-green-400 mb-2">****{subHeading}****</p>
      <h3 className="text-4xl uppercase border-green-100 border-y-2 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default PageTitle;