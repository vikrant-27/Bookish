import React from 'react'

function Cards({ item }) {
    console.log('Item in Cards:', item); // Log the item data

    if (!item) {
      return <div>Loading...</div>; // Render a loading indicator if item is undefined
    }
  return (
    <>
      <div className="mt-4 my-3 p-8 max-w-screen-2xl container mx-auto md:px-10 px-4 mb-2">

        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1721246215~exp=1721249815~hmac=45d562dec7ba083f145a63e6b4771e16d9470ee44f85d8067e1ea5c21d46e1eb&w=740" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Read Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards