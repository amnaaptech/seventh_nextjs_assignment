


interface Server {
  id: number;
  name: string;
  type: string;
  compeleted: boolean;
}

// Fetch data directly in the component
async function fetchBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: Server[] = await response.json();
  console.log("server >>>", parsedResponse);

  return (
    <div className="p-6">
      {/* <Navbar></Navbar> */}
      <h1 className="text-2xl font-bold mb-6 text-center">Book Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parsedResponse.map((server, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="font-medium text-gray-800">Id: {server.id}</p>
            <p className="font-medium text-gray-800">Name: {server.name}</p>
            <p className="font-medium text-gray-800">Type: {server.type}</p>
            <p
              className={
                server.compeleted
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              Complete: {server.compeleted ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default fetchBooks;
