import React from "react";

// multiple returns // ternary operatos // short circuit evaluation

function ConditionalRendering() {
  const isLoading = false;
  const isSubmitting = true;
  const isError = true;

  if (isLoading) {
    return <h1 className="uppercase">Loading...</h1>;
  }
  return (
    <div>
      <h1>MAIN CONTENT</h1>
      <button className="mybtn">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {isError && <h1>Error Loading page, try again</h1>}
    </div>
  );
}

export default ConditionalRendering;
